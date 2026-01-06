import { useTranslation } from 'react-i18next'
import { categories } from '../../data/menu'

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const { t } = useTranslation()

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[--color-cream-dark]">
      <div className="px-4 md:px-6 lg:px-8 py-3">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[--color-olive] text-white'
                  : 'bg-[--color-cream] text-[--color-brown] hover:bg-[--color-cream-dark]'
              }`}
            >
              {t(category.nameKey)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
