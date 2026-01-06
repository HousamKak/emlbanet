import { useTranslation } from 'react-i18next'
import { Badge as BadgeType } from '../../types/menu'

interface BadgeProps {
  type: BadgeType
}

export function Badge({ type }: BadgeProps) {
  const { t } = useTranslation()

  const styles = {
    new: 'bg-[--color-terracotta] text-white shadow-sm shadow-[--color-terracotta]/30',
    popular: 'bg-[--color-gold] text-[--color-brown] shadow-sm shadow-[--color-gold]/30',
    seasonal: 'bg-[--color-olive] text-white shadow-sm shadow-[--color-olive]/30'
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${styles[type]}`}>
      {t(`promotions.${type}`)}
    </span>
  )
}
