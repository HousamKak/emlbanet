import { useTranslation } from 'react-i18next'
import { PhoneIcon, InstagramIcon, WhatsAppIcon, LocationIcon } from '../common/Icons'

const PHONE = '71259389'
const INSTAGRAM = 'https://www.instagram.com/em.elbanet_'
const WHATSAPP = `https://wa.me/961${PHONE}`

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[--color-brown] text-white mt-auto">
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-10">
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href={`tel:+961${PHONE}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>{t('contact.phone')}</span>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] transition-colors text-sm font-medium"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>{t('contact.whatsapp')}</span>
          </a>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>@em.elbanet_</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8">
          <LocationIcon className="w-4 h-4" />
          <span>{t('contact.location')}</span>
        </div>

        {/* Divider */}
        <div className="w-16 h-px mx-auto bg-white/20 mb-8" />

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[--color-olive]">
            <img
              src="/images/logo.jpeg"
              alt={t('brand.name')}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-white/50">
            {year} {t('brand.name')} - {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
