import Discount from '../Discount'
import images from '../../data/images'
import './LinkItemStyle.css'

function LinkItem({ item }) {
  return (
    <a
      className='linkPath'
      target='_blank'
      rel='noreferrer'
      href={item.link}
    >
      <div className='link-item-container'>
        <div className='leftbox'>
          <img src={images[item.image]} alt={item.name} />
        </div>
        <div className='rightbox'>
          <div className='row-1'>
            <h2>{item.name}</h2>
            <Discount screen='mobile' value={item.discount} />
            <Discount screen='desktop' value={item.discount} />
          </div>
          <p>{item.description}</p>
        </div>
      </div>
    </a>
  )
}

export default LinkItem
