import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useCart } from '../../context/CartContext'
import { LanguageToggle } from '../common/LanguageToggle'

export function Header() {
  const { t } = useTranslation()
  const { itemCount, toggleCart } = useCart()

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50"
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-[--color-cream-dark]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-[--color-olive]/20 group-hover:ring-[--color-olive]/40 transition-all duration-300">
                <img
                  src="/images/logo.jpeg"
                  alt={t('brand.name')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-full bg-[--color-olive]/0 group-hover:bg-[--color-olive]/10 blur-lg transition-all duration-300" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-[--color-brown] group-hover:text-[--color-olive] transition-colors duration-300">
                {t('brand.name')}
              </h1>
              <p className="text-xs text-[--color-terracotta] font-medium -mt-0.5">
                {t('brand.tagline')}
              </p>
            </div>
          </a>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Toggle */}
            <LanguageToggle />

            {/* Cart Button */}
            <motion.button
              onClick={toggleCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-full bg-gradient-to-r from-[--color-olive] to-[--color-olive-dark] text-white font-medium shadow-lg shadow-[--color-olive]/20 hover:shadow-xl hover:shadow-[--color-olive]/30 transition-all duration-300"
              aria-label={t('cart.title')}
            >
              {/* Cart icon */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>

              {/* Badge */}
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -end-1.5 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs font-bold bg-[--color-terracotta] text-white rounded-full ring-2 ring-white"
                >
                  {itemCount > 9 ? '9+' : itemCount}
                </motion.span>
              )}

              {/* Text - hidden on mobile */}
              <span className="hidden md:inline text-sm">
                {t('cart.title')}
              </span>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[--color-olive-light] to-[--color-olive] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
