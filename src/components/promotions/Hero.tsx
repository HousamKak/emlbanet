import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useLanguage } from '../../context/LanguageContext'

export function Hero() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--color-cream] via-[--color-cream-dark] to-[#E8DFD3]" />

      {/* Decorative organic shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large olive blob - top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-20 -end-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
        >
          <div className="w-full h-full rounded-full bg-[--color-olive] blur-3xl"
            style={{ borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%' }} />
        </motion.div>

        {/* Terracotta accent - bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-32 -start-32 w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
        >
          <div className="w-full h-full rounded-full bg-[--color-terracotta] blur-3xl"
            style={{ borderRadius: '40% 60% 30% 70% / 60% 30% 70% 40%' }} />
        </motion.div>

        {/* Gold accent - center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/2 start-1/3 w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        >
          <div className="w-full h-full rounded-full bg-[--color-gold] blur-3xl" />
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 end-[15%] w-3 h-3 rounded-full bg-[--color-gold]"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 start-[10%] w-2 h-2 rounded-full bg-[--color-terracotta]"
        />
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 end-[20%] w-4 h-4 rounded-full bg-[--color-olive-light] opacity-50"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Logo with elegant frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[--color-olive] opacity-20 blur-3xl rounded-full scale-110" />

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 md:-inset-6"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="url(#heroGradient)"
                    strokeWidth="1"
                    strokeDasharray="8 12"
                    opacity="0.4"
                  />
                  <defs>
                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6B7B4C" />
                      <stop offset="50%" stopColor="#D4A84B" />
                      <stop offset="100%" stopColor="#C4704B" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Main logo container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full bg-white shadow-float" />
                <div className="absolute inset-2 md:inset-3 rounded-full overflow-hidden border-4 border-[--color-cream-dark]">
                  <img
                    src="/images/logo.jpeg"
                    alt={t('brand.name')}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative sparkles */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -end-2 text-2xl md:text-3xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-1 -start-1 text-xl md:text-2xl"
                >
                  ✨
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-start order-2 lg:order-1">
            {/* Eyebrow text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-px bg-[--color-gold]" />
              <span className="text-sm font-medium tracking-wider text-[--color-olive] uppercase">
                {language === 'ar' ? 'مطبخ منزلي' : 'Home Kitchen'}
              </span>
              <span className="w-8 h-px bg-[--color-gold]" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[--color-brown] mb-4 leading-[1.1]"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle with accent color */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-medium text-[--color-terracotta] mb-6"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-[--color-brown-light] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.catering')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[--color-olive] to-[--color-olive-dark] text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-glow-olive hover:-translate-y-1"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">
                  🍽️
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[--color-olive-light] to-[--color-olive] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="https://wa.me/96171259389"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border-2 border-[--color-olive] text-[--color-olive] font-semibold hover:bg-[--color-olive] hover:text-white transition-all duration-300 hover:-translate-y-1"
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
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-[--color-brown-light]"
            >
              <div className="flex items-center gap-2">
                <span className="text-[--color-gold]">★★★★★</span>
                <span>{language === 'ar' ? 'طعم بيتي أصيل' : 'Authentic Home Taste'}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[--color-cream-dark]" />
              <div className="hidden sm:flex items-center gap-2">
                <span>🚗</span>
                <span>{language === 'ar' ? 'توصيل متاح' : 'Delivery Available'}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 38C840 46 960 62 1080 65C1200 68 1320 58 1380 53L1440 48V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
