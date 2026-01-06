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
    <section id="menu" className="menu-section">
      {/* Section header */}
      <div className="menu-header">
        <h2 className="menu-title">
          {t('nav.menu')}
        </h2>
        <div className="menu-underline" />
      </div>

      {/* Category tabs */}
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Grid */}
      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div style={{textAlign: 'center', padding: '4rem 0', color: 'var(--color-brown-light)'}}>
          <span style={{fontSize: '3rem', display: 'block', marginBottom: '0.75rem', opacity: 0.3}}>🍽️</span>
          <p style={{fontWeight: 500}}>No items in this category</p>
        </div>
      )}
    </section>
  )
}
