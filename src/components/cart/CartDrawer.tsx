import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { CloseIcon, TrashIcon, WhatsAppIcon, MinusIcon, PlusIcon } from '../common/Icons'

const PHONE = '961712593589'

export function CartDrawer() {
  const { t } = useTranslation()
  const { language, isRtl } = useLanguage()
  const { items, isOpen, total, closeCart, clearCart, updateQuantity, removeItem, getItemPrice } = useCart()

  const generateWhatsAppMessage = () => {
    let message = language === 'ar'
      ? `مرحبا! أود طلب التالي:\n------------------\n`
      : `Hello! I would like to order:\n------------------\n`

    items.forEach(item => {
      const name = language === 'ar' ? item.menuItem.nameAr : item.menuItem.nameEn
      const options = item.selectedOptions
        .map(optId => {
          const opt = item.menuItem.options?.find(o => o.id === optId)
          return opt ? (language === 'ar' ? opt.nameAr : opt.nameEn) : ''
        })
        .filter(Boolean)
        .join(', ')

      const optionText = options ? ` (${options})` : ''
      const price = getItemPrice(item)
      message += `- ${name}${optionText} x${item.quantity} - $${price}\n`
    })

    message += `------------------\n`
    message += language === 'ar' ? `المجموع: $${total}` : `Total: $${total}`

    return encodeURIComponent(message)
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/${PHONE}?text=${message}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: isRtl ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 end-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[--color-cream-dark]">
              <h2 className="text-xl font-bold text-[--color-brown]">{t('cart.title')}</h2>
              <button
                onClick={closeCart}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[--color-cream] transition-colors"
                aria-label="Close cart"
              >
                <CloseIcon className="w-5 h-5 text-[--color-brown]" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-[--color-brown-light]">
                  <span className="text-5xl mb-3 opacity-30">🛒</span>
                  <p className="font-medium">{t('cart.empty')}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item, index) => {
                    const name = language === 'ar' ? item.menuItem.nameAr : item.menuItem.nameEn
                    const options = item.selectedOptions
                      .map(optId => {
                        const opt = item.menuItem.options?.find(o => o.id === optId)
                        return opt ? (language === 'ar' ? opt.nameAr : opt.nameEn) : ''
                      })
                      .filter(Boolean)

                    return (
                      <div
                        key={`${item.menuItem.id}-${item.selectedOptions.join(',')}-${index}`}
                        className="flex gap-3 bg-[--color-cream] rounded-xl p-3"
                      >
                        {/* Image */}
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0">
                          {item.menuItem.image ? (
                            <img
                              src={item.menuItem.image}
                              alt={name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-xl opacity-30">🍽️</span>
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[--color-brown] text-sm truncate">{name}</h3>
                          {options.length > 0 && (
                            <p className="text-xs text-[--color-brown-light] truncate mt-0.5">
                              {options.join(', ')}
                            </p>
                          )}
                          <p className="text-[--color-olive] font-bold text-sm mt-1">
                            ${getItemPrice(item)}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.menuItem.id, item.selectedOptions, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[--color-cream-dark] transition-colors"
                            >
                              <MinusIcon className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center font-semibold text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.menuItem.id, item.selectedOptions, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[--color-cream-dark] transition-colors"
                            >
                              <PlusIcon className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => removeItem(item.menuItem.id, item.selectedOptions)}
                              className="ms-auto w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 border-t border-[--color-cream-dark] bg-white space-y-3">
                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-[--color-brown] font-medium">{t('cart.total')}</span>
                  <span className="text-xl font-bold text-[--color-olive]">${total}</span>
                </div>

                {/* WhatsApp Order */}
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full min-h-[52px] flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>{t('cart.orderViaWhatsapp')}</span>
                </button>

                {/* Clear cart */}
                <button
                  onClick={clearCart}
                  className="w-full py-3 text-sm text-red-500 font-medium hover:bg-red-50 rounded-lg transition-colors"
                >
                  {t('cart.clear')}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
