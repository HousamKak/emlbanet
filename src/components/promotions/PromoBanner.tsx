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
    <section className="promo-section">
      <div className="promo-header">
        <h2 className="promo-title">
          {t('promotions.title')}
        </h2>
      </div>

      <div className="promo-scroll">
        <div className="promo-scroll-inner">
          {promoItems.map(item => {
            const name = language === 'ar' ? item.nameAr : item.nameEn

            return (
              <a
                key={item.id}
                href="#menu"
                className="promo-card"
              >
                <div className="promo-card-image">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={name}
                      loading="lazy"
                    />
                  ) : (
                    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <span style={{fontSize: '2rem', opacity: 0.3}}>🍽️</span>
                    </div>
                  )}
                  {item.badges && item.badges[0] && (
                    <div className="promo-card-badge">
                      <Badge type={item.badges[0]} />
                    </div>
                  )}
                </div>
                <div className="promo-card-body">
                  <p className="promo-card-title">{name}</p>
                  <p className="promo-card-price">${item.price}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
