import { useTranslation } from 'react-i18next'
import { categories } from '../../data/menu'

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const { t } = useTranslation()

  return (
    <div className="sticky top-[73px] z-30 bg-[--color-cream]/95 backdrop-blur-sm py-3 -mx-4 px-4 border-b border-[--color-primary]/10">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-[--color-primary] text-white shadow-md'
                : 'bg-white text-[--color-secondary] hover:bg-[--color-primary]/10 border border-[--color-primary]/30'
            }`}
          >
            {t(category.nameKey)}
          </button>
        ))}
      </div>
    </div>
  )
}
