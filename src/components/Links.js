'use client'

import { useState, useEffect } from 'react'
import CategoryTabs from './CategoryTabs'
import LinkItem from './items/LinkItem.js'
import './LinksStyle.css'

function Links({ sections }) {
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const getHashCategory = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && sections.some((s) => s.id === hash)) return hash
      return 'all'
    }
    setActiveCategory(getHashCategory())
    const onHashChange = () => setActiveCategory(getHashCategory())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [sections])

  const handleSelect = (id) => {
    setActiveCategory(id)
    window.location.hash = id === 'all' ? '' : id
  }

  const items =
    activeCategory === 'all'
      ? sections.flatMap((s) => s.items)
      : sections.find((s) => s.id === activeCategory)?.items || []

  return (
    <section className='links-section'>
      <CategoryTabs
        sections={sections}
        activeId={activeCategory}
        onSelect={handleSelect}
      />
      <div className='main LinksItemContainer'>
        {items.map((item, index) => (
          <LinkItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Links
