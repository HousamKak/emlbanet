import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useCart } from '../../context/CartContext'
import { LanguageToggle } from '../common/LanguageToggle'

export function Header() {
  const { t } = useTranslation()
  const { itemCount, toggleCart } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[--color-cream-dark]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-1 ring-[--color-cream-dark]">
              <img
                src="/images/logo.jpeg"
                alt={t('brand.name')}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-bold text-[--color-brown] leading-tight">
                {t('brand.name')}
              </h1>
              <p className="text-[10px] md:text-xs text-[--color-terracotta] font-medium">
                {t('brand.tagline')}
              </p>
            </div>
          </a>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <LanguageToggle />

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative inline-flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full bg-[--color-olive] text-white font-medium transition-colors hover:bg-[--color-olive-dark]"
              aria-label={t('cart.title')}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -end-1 w-5 h-5 flex items-center justify-center text-[10px] font-bold bg-[--color-terracotta] text-white rounded-full ring-2 ring-white"
                >
                  {itemCount > 9 ? '9+' : itemCount}
                </motion.span>
              )}

              <span className="hidden md:inline text-sm">
                {t('cart.title')}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
