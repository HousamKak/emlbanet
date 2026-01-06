import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { MenuItem } from '../../types/menu'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { Badge } from '../common/Badge'

interface MenuCardProps {
  item: MenuItem
  index?: number
}

export function MenuCard({ item, index = 0 }: MenuCardProps) {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const { addItem } = useCart()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [isAdding, setIsAdding] = useState(false)

  const name = language === 'ar' ? item.nameAr : item.nameEn

  const unitLabel = {
    kg: t('menu.perKg'),
    dozen: t('menu.perDozen'),
    plate: t('menu.perPlate'),
    item: ''
  }[item.unit]

  const totalPrice = item.price + selectedOptions.reduce((sum, optId) => {
    const opt = item.options?.find(o => o.id === optId)
    return sum + (opt?.priceModifier || 0)
  }, 0)

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    )
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(item, selectedOptions)
    setSelectedOptions([])
    setTimeout(() => setIsAdding(false), 600)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      className="menu-card"
    >
      {/* Image */}
      <div className="menu-card-image">
        {item.image ? (
          <img
            src={item.image}
            alt={name}
            loading="lazy"
          />
        ) : (
          <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <span style={{fontSize: '2.5rem', opacity: 0.2}}>🍽️</span>
          </div>
        )}

        {/* Badges */}
        {item.badges && item.badges.length > 0 && (
          <div className="menu-card-badges">
            {item.badges.map(badge => (
              <Badge key={badge} type={badge} />
            ))}
          </div>
        )}

        {/* Price overlay */}
        <div className="menu-card-price">
          <span className="menu-card-price-amount">${totalPrice}</span>
          {unitLabel && (
            <span className="menu-card-price-unit">{unitLabel}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="menu-card-body">
        {/* Title */}
        <h3 className="menu-card-title">
          {name}
        </h3>

        {/* Serves info */}
        {item.serves && (
          <p className="menu-card-serves">
            <svg style={{width: '0.875rem', height: '0.875rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            {t('menu.serves', { count: item.serves })}
          </p>
        )}

        {/* Options */}
        {item.options && item.options.length > 0 && (
          <div className="menu-card-options">
            {item.options.map(option => (
              <button
                key={option.id}
                onClick={() => handleOptionToggle(option.id)}
                className={`option-button ${selectedOptions.includes(option.id) ? 'active' : ''}`}
              >
                {language === 'ar' ? option.nameAr : option.nameEn}
                <span style={{marginInlineStart: '0.25rem'}}>
                  +${option.priceModifier}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`add-to-cart-button ${isAdding ? 'added' : ''}`}
        >
          {isAdding ? (
            <>
              <svg style={{width: '1rem', height: '1rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{language === 'ar' ? 'تمت الإضافة!' : 'Added!'}</span>
            </>
          ) : (
            <>
              <svg style={{width: '1rem', height: '1rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span>{t('menu.addToCart')}</span>
            </>
          )}
        </button>
      </div>
    </motion.article>
  )
}
