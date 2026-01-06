import { useTranslation } from 'react-i18next'
import { categories } from '../../data/menu'

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
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
