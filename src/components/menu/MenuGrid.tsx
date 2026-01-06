import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { menuItems } from '../../data/menu'
import { MenuCard } from './MenuCard'
import { CategoryTabs } from './CategoryTabs'

export function MenuGrid() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems
    return menuItems.filter(item => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="menu" className="py-6">
      <h2 className="text-2xl font-bold text-[--color-secondary] mb-4 px-4">
        {t('nav.menu')}
      </h2>

      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4">
        {filteredItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-[--color-secondary]/60">
          <span className="text-4xl mb-2 block">🍽️</span>
          <p>No items in this category</p>
        </div>
      )}
    </section>
  )
}
