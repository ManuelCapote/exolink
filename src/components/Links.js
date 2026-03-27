import { useState, useEffect } from 'react'
import CategoryTabs from './CategoryTabs'
import LinkItem from './items/LinkItem.js'
import './LinksStyle.css'

function Links({ sections }) {
  const getHashCategory = () => {
    const hash = window.location.hash.replace('#', '')
    if (hash && sections.some((s) => s.id === hash)) return hash
    return 'all'
  }

  const [activeCategory, setActiveCategory] = useState(getHashCategory)

  useEffect(() => {
    const onHashChange = () => setActiveCategory(getHashCategory())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleSelect = (id) => {
    setActiveCategory(id)
    window.location.hash = id === 'all' ? '' : id
  }

  const items =
    activeCategory === 'all'
      ? sections.flatMap((s) => s.items)
      : sections.find((s) => s.id === activeCategory)?.items || []

  return (
    <div className='links-section'>
      <CategoryTabs
        sections={sections}
        activeId={activeCategory}
        onSelect={handleSelect}
      />
      <div className='main LinksItemContainer'>
        {items.map((item) => (
          <LinkItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Links
