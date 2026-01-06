import { useTranslation } from 'react-i18next'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { CloseIcon, TrashIcon, WhatsAppIcon, MinusIcon, PlusIcon } from '../common/Icons'

const PHONE = '961712593589'

export function CartDrawer() {
  const { t } = useTranslation()
  const { language } = useLanguage()
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

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 end-0 h-full w-full max-w-md bg-white z-50 shadow-2xl slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[--color-secondary]">{t('cart.title')}</h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <CloseIcon className="w-6 h-6 text-[--color-secondary]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[--color-secondary]/60">
              <span className="text-6xl mb-4">🛒</span>
              <p>{t('cart.empty')}</p>
            </div>
          ) : (
            <div className="space-y-4">
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
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                      {item.menuItem.image ? (
                        <img
                          src={item.menuItem.image}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-2xl">🍽️</span>
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[--color-secondary] truncate">{name}</h3>
                      {options.length > 0 && (
                        <p className="text-xs text-[--color-secondary]/60 truncate">
                          {options.join(', ')}
                        </p>
                      )}
                      <p className="text-[--color-primary] font-bold mt-1">
                        ${getItemPrice(item)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.menuItem.id, item.selectedOptions, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                        >
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.menuItem.id, item.selectedOptions, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                        >
                          <PlusIcon className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => removeItem(item.menuItem.id, item.selectedOptions)}
                          className="ms-auto p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
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
          <div className="p-4 border-t border-gray-200 space-y-3">
            {/* Total */}
            <div className="flex items-center justify-between text-lg font-bold">
              <span className="text-[--color-secondary]">{t('cart.total')}</span>
              <span className="text-[--color-primary]">${total}</span>
            </div>

            {/* Actions */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>{t('cart.orderViaWhatsapp')}</span>
            </button>

            <button
              onClick={clearCart}
              className="w-full py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              {t('cart.clear')}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
