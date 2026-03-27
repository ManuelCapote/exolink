import './CategoryTabsStyle.css'

function CategoryTabs({ sections, activeId, onSelect }) {
  return (
    <nav className='category-tabs'>
      <button
        className={`tab-btn ${activeId === 'all' ? 'active' : ''}`}
        onClick={() => onSelect('all')}
      >
        All
      </button>
      {sections.map((section) => (
        <button
          key={section.id}
          className={`tab-btn ${activeId === section.id ? 'active' : ''}`}
          onClick={() => onSelect(section.id)}
        >
          {section.title}
        </button>
      ))}
    </nav>
  )
}

export default CategoryTabs
