import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useLanguage } from '../../context/LanguageContext'

export function Hero() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section className="relative min-h-[60vh] md:min-h-[68vh] overflow-hidden bg-gradient-to-b from-[--color-cream] to-white flex items-center">
      {/* Subtle decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -end-32 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[--color-olive]/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -start-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[--color-terracotta]/[0.03] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 md:mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[--color-olive]/10 blur-2xl rounded-full scale-150" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-white shadow-xl shadow-[--color-brown]/10 p-1.5 md:p-2">
                <img
                  src="/images/logo.jpeg"
                  alt={t('brand.name')}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-5 md:mb-6"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[--color-gold]" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.15em] text-[--color-olive] uppercase">
              {language === 'ar' ? 'مطبخ منزلي' : 'Home Kitchen'}
            </span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[--color-gold]" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[--color-brown] mb-4 md:mb-5 leading-snug"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-2xl font-medium text-[--color-terracotta] leading-relaxed mb-6 md:mb-7"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-[--color-brown-light] mb-10 md:mb-12 max-w-md leading-relaxed"
          >
            {t('hero.catering')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full max-w-md"
          >
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[--color-olive] text-white font-semibold text-base transition-all duration-200 hover:bg-[--color-olive-dark] hover:shadow-lg"
            >
              <span>{t('hero.cta')}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a
              href="https://wa.me/96171259389"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-[--color-olive] text-[--color-olive] font-semibold text-base transition-all duration-200 hover:bg-[--color-olive] hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-5 md:gap-6 text-sm text-[--color-brown-light]"
          >
            <div className="flex items-center gap-2">
              <span className="text-[--color-gold]">★★★★★</span>
              <span className="font-medium">{language === 'ar' ? 'طعم بيتي' : 'Home Taste'}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[--color-brown-light]/30" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[--color-olive]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-medium">{language === 'ar' ? 'توصيل متاح' : 'Delivery'}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
