import { useTranslation } from 'react-i18next'
import { Badge as BadgeType } from '../../types/menu'

interface BadgeProps {
  type: BadgeType
}

export function Badge({ type }: BadgeProps) {
  const { t } = useTranslation()

  const getClassName = () => {
    switch (type) {
      case 'popular':
        return 'badge badge-popular'
      case 'seasonal':
        return 'badge badge-seasonal'
      default:
        return 'badge badge-popular'
    }
  }

  return (
    <span className={getClassName()}>
      {t(`promotions.${type}`)}
    </span>
  )
}
