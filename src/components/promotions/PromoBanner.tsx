import { useTranslation } from 'react-i18next'
import { menuItems } from '../../data/menu'
import { useLanguage } from '../../context/LanguageContext'
import { Badge } from '../common/Badge'

export function PromoBanner() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  // Get items with badges
  const promoItems = menuItems.filter(item => item.badges && item.badges.length > 0).slice(0, 4)

  if (promoItems.length === 0) return null

  return (
    <section className="py-6 px-4">
      <h2 className="text-xl font-bold text-[--color-secondary] mb-4">
        {t('promotions.title')} ✨
      </h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
        {promoItems.map(item => {
          const name = language === 'ar' ? item.nameAr : item.nameEn

          return (
            <a
              key={item.id}
              href="#menu"
              className="flex-shrink-0 w-36 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-[--color-cream] flex items-center justify-center">
                    <span className="text-3xl">🍽️</span>
                  </div>
                )}
                {item.badges && item.badges[0] && (
                  <div className="absolute top-2 start-2">
                    <Badge type={item.badges[0]} />
                  </div>
                )}
              </div>
              <div className="p-2">
                <p className="text-sm font-medium text-[--color-secondary] truncate">{name}</p>
                <p className="text-sm font-bold text-[--color-primary]">${item.price}</p>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
