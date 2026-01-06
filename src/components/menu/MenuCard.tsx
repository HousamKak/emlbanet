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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-elegant hover:shadow-float transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[--color-cream] to-[--color-cream-dark]">
        {item.image ? (
          <>
            <img
              src={item.image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-30">🍽️</span>
          </div>
        )}

        {/* Badges */}
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-3 start-3 flex flex-col gap-1.5">
            {item.badges.map(badge => (
              <Badge key={badge} type={badge} />
            ))}
          </div>
        )}

        {/* Price Tag - elegant floating design */}
        <div className="absolute bottom-3 end-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-baseline gap-1 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg"
          >
            <span className="text-2xl font-bold text-[--color-olive]">${totalPrice}</span>
            {unitLabel && (
              <span className="text-xs text-[--color-brown-light] font-medium">{unitLabel}</span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-[--color-brown] mb-1 line-clamp-1 group-hover:text-[--color-olive] transition-colors duration-300">
          {name}
        </h3>

        {/* Serves info */}
        {item.serves && (
          <p className="text-sm text-[--color-brown-light] mb-3 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            {t('menu.serves', { count: item.serves })}
          </p>
        )}

        {/* Options */}
        {item.options && item.options.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-[--color-brown-light] mb-2 font-medium uppercase tracking-wider">
              {t('menu.options')}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.options.map(option => (
                <motion.button
                  key={option.id}
                  onClick={() => handleOptionToggle(option.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedOptions.includes(option.id)
                      ? 'bg-[--color-olive] text-white shadow-md shadow-[--color-olive]/20'
                      : 'bg-[--color-cream] text-[--color-brown] hover:bg-[--color-cream-dark]'
                  }`}
                >
                  {language === 'ar' ? option.nameAr : option.nameEn}
                  <span className={`ms-1 ${selectedOptions.includes(option.id) ? 'opacity-80' : 'text-[--color-olive]'}`}>
                    +${option.priceModifier}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <motion.button
          onClick={handleAddToCart}
          disabled={isAdding}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-gradient-to-r from-[--color-olive] to-[--color-olive-dark] text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[--color-olive]/25 disabled:opacity-70"
        >
          {/* Success animation */}
          <motion.div
            initial={false}
            animate={{ scale: isAdding ? 50 : 0 }}
            className="absolute w-4 h-4 rounded-full bg-[--color-gold]"
          />

          <span className="relative z-10 flex items-center gap-2">
            {isAdding ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{language === 'ar' ? 'تمت الإضافة!' : 'Added!'}</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span>{t('menu.addToCart')}</span>
              </>
            )}
          </span>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[--color-olive-light] to-[--color-olive] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </motion.div>
  )
}
