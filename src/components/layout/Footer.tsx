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
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <InstagramIcon className="footer-instagram-icon" />
            <span>em.elbanet_</span>
          </a>
        </div>

        {/* Location */}
        <div className="footer-location">
          <LocationIcon className="footer-location-icon" />
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
