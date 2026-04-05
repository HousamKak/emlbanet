import { useTranslation } from 'react-i18next'
import type { CategoryDef } from '../../types/menu'

interface CategoryTabsProps {
  categories: readonly CategoryDef[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  const { t } = useTranslation()

  return (
    <div className="category-tabs">
      <div className="category-tabs-container">
        <div className="category-tabs-list">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            >
              {t(category.nameKey)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
