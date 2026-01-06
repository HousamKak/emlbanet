import { useTranslation } from 'react-i18next'
import { Badge as BadgeType } from '../../types/menu'

interface BadgeProps {
  type: BadgeType
}

export function Badge({ type }: BadgeProps) {
  const { t } = useTranslation()

  const styles = {
    new: 'bg-[--color-accent] text-white',
    popular: 'bg-[--color-golden] text-white',
    seasonal: 'bg-[--color-primary] text-white'
  }

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${styles[type]}`}>
      {t(`promotions.${type}`)}
    </span>
  )
}
