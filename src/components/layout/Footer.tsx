import { useTranslation } from 'react-i18next'
import { PhoneIcon, InstagramIcon, WhatsAppIcon, LocationIcon } from '../common/Icons'

const PHONE = '71259389'
const INSTAGRAM = 'https://www.instagram.com/em.elbanet_'
const WHATSAPP = `https://wa.me/961${PHONE}`

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[--color-secondary] text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href={`tel:+961${PHONE}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            <span>{t('contact.phone')}</span>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>{t('contact.whatsapp')}</span>
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>@em.elbanet_</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-white/80 mb-6">
          <LocationIcon className="w-5 h-5" />
          <span>{t('contact.location')}</span>
        </div>

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center gap-4 pt-6 border-t border-white/20">
          <img
            src="/images/logo.jpeg"
            alt={t('brand.name')}
            className="w-16 h-16 rounded-full border-2 border-[--color-primary]"
          />
          <p className="text-sm text-white/60">
            {year} {t('brand.name')} - {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
