import React from 'react'
import Discount from '../Discount'
// Style Import
import './LinkItemStyle.css'

function LinkItem(props) {
  return (
    <a
      className='linkPath'
      target='_blank'
      rel='noreferrer'
      href={props.item.storeLink}
    >
      <div className='link-item-container'>
        <div className='leftbox'>
          <img src={props.item.imgPath} alt='' />
        </div>
        <div className='rightbox'>
          <div className='row-1'>
            <h2>{props.item.productName}</h2>
            <Discount screen='mobile' value={props.item.discount} />
            <Discount screen='desktop' value={props.item.discount} />
          </div>
          <p>{props.item.description}</p>
        </div>
      </div>
    </a>
  )
}

export default LinkItem
