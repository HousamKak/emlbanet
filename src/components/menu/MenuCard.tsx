import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem } from '../../types/menu'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { Badge } from '../common/Badge'
import { PlusIcon } from '../common/Icons'

interface MenuCardProps {
  item: MenuItem
}

export function MenuCard({ item }: MenuCardProps) {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const { addItem } = useCart()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

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
    addItem(item, selectedOptions)
    setSelectedOptions([])
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 fade-in">
      {/* Image */}
      <div className="relative aspect-square bg-[--color-cream]">
        {item.image ? (
          <img
            src={item.image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🍽️</span>
          </div>
        )}

        {/* Badges */}
        {item.badges && item.badges.length > 0 && (
          <div className="absolute top-2 start-2 flex flex-col gap-1">
            {item.badges.map(badge => (
              <Badge key={badge} type={badge} />
            ))}
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-2 end-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
          <span className="text-lg font-bold text-[--color-primary]">${totalPrice}</span>
          {unitLabel && <span className="text-xs text-[--color-secondary]/70 ms-1">{unitLabel}</span>}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-[--color-secondary] text-lg mb-1">{name}</h3>

        {item.serves && (
          <p className="text-sm text-[--color-secondary]/60 mb-2">
            {t('menu.serves', { count: item.serves })}
          </p>
        )}

        {/* Options */}
        {item.options && item.options.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-[--color-secondary]/60 mb-1">{t('menu.options')}:</p>
            <div className="flex flex-wrap gap-2">
              {item.options.map(option => (
                <button
                  key={option.id}
                  onClick={() => handleOptionToggle(option.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedOptions.includes(option.id)
                      ? 'bg-[--color-primary] text-white'
                      : 'bg-[--color-cream] text-[--color-secondary] hover:bg-[--color-primary]/20'
                  }`}
                >
                  {language === 'ar' ? option.nameAr : option.nameEn}
                  <span className="ms-1 opacity-70">+${option.priceModifier}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[--color-primary] text-white font-medium hover:bg-[--color-primary-dark] transition-colors duration-200 active:scale-[0.98]"
        >
          <PlusIcon className="w-5 h-5" />
          <span>{t('menu.addToCart')}</span>
        </button>
      </div>
    </div>
  )
}
