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
    <section className="py-6 bg-white">
      <div className="px-5 md:px-8 mb-4">
        <h2 className="text-lg md:text-xl font-bold text-[--color-brown]">
          {t('promotions.title')}
        </h2>
      </div>

      <div className="px-4 md:px-6">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {promoItems.map(item => {
            const name = language === 'ar' ? item.nameAr : item.nameEn

            return (
              <a
                key={item.id}
                href="#menu"
                className="flex-shrink-0 w-32 md:w-36 bg-[--color-cream] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200"
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
                    <div className="w-full h-full bg-[--color-cream-dark] flex items-center justify-center">
                      <span className="text-2xl opacity-30">🍽️</span>
                    </div>
                  )}
                  {item.badges && item.badges[0] && (
                    <div className="absolute top-2 start-2">
                      <Badge type={item.badges[0]} />
                    </div>
                  )}
                </div>
                <div className="p-2.5">
                  <p className="text-sm font-semibold text-[--color-brown] truncate">{name}</p>
                  <p className="text-sm font-bold text-[--color-olive]">${item.price}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
