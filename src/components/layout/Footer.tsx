import { useTranslation } from 'react-i18next'
import { PhoneIcon, InstagramIcon, WhatsAppIcon, LocationIcon } from '../common/Icons'

const PHONE = '71259389'
const INSTAGRAM = 'https://www.instagram.com/em.elbanet_'
const WHATSAPP = `https://wa.me/961${PHONE}`

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Links */}
        <div className="footer-links">
          <a
            href={`tel:+961${PHONE}`}
            className="footer-link"
          >
            <PhoneIcon style={{width: '1.25rem', height: '1.25rem'}} />
            <span>{t('contact.phone')}</span>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <WhatsAppIcon style={{width: '1.25rem', height: '1.25rem'}} />
            <span>{t('contact.whatsapp')}</span>
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <InstagramIcon style={{width: '1.25rem', height: '1.25rem'}} />
            <span>@em.elbanet_</span>
          </a>
        </div>

        {/* Location */}
        <div className="footer-location">
          <LocationIcon style={{width: '1.125rem', height: '1.125rem', display: 'inline', marginRight: '0.5rem'}} />
          <span>{t('contact.location')}</span>
        </div>

        {/* Logo & Copyright */}
        <div className="footer-bottom">
          <img
            src="/images/logo.jpeg"
            alt={t('brand.name')}
            style={{width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'inline-block', marginBottom: '1rem'}}
          />
          <p>{year} {t('brand.name')} - {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
