import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[--color-cream] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239ACD32' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Logo/Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white shadow-xl p-2 dotted-border">
                <img
                  src="/images/logo.jpeg"
                  alt={t('brand.name')}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Decorative sparkles */}
              <span className="absolute -top-2 -end-2 text-2xl">✨</span>
              <span className="absolute -bottom-1 -start-1 text-xl">✨</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-start flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-[--color-secondary] mb-2">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-[--color-accent] font-medium mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-[--color-secondary]/70 mb-6 max-w-md">
              {t('hero.catering')}
            </p>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[--color-primary] text-white font-semibold hover:bg-[--color-primary-dark] transition-colors shadow-lg hover:shadow-xl"
            >
              <span>{t('hero.cta')}</span>
              <span className="text-xl">🍽️</span>
            </a>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.5C672 45.7 768 56.3 864 58.8C960 61.3 1056 55.7 1152 48.5C1248 41.3 1344 32.7 1392 28.3L1440 24V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
