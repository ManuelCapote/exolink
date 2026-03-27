import LinkItem from './items/LinkItem.js'
import './LinksStyle.css'

function Links({ sections }) {
  const allItems = sections.flatMap((section) => section.items)

  return (
    <div className='main LinksItemContainer'>
      {allItems.map((item) => (
        <LinkItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Links
