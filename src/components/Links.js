import React from 'react'

// Sub Component Import
import LinkItem from './items/LinkItem.js'

// Style Import
import './LinksStyle.css'

function Links(props) {
  return (
    <div className='main LinksItemContainer'>
      {props.items.map((item, index) => (
        <LinkItem key={index} item={item} />
      ))}
    </div>
  )
}

export default Links
