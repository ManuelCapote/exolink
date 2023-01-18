import { getDefaultNormalizer } from '@testing-library/react'
import './HeaderStyle.css'
import RectangleImgPlus from '../assets/images/plus.png'
import RectangleImgMinus from '../assets/images/Rectangle 2@2x.png'
import userImg from '../assets/images/user-img@2x.png'
import triangleImg1 from '../assets/images/Polygon 1@2x.png'
import triangleImg2 from '../assets/images/Polygon 2@2x.png'
import lineImg from '../assets/images/Line 3@2x.png'
// Assets Import

function Header(props) {
  const user = {
    firstName: 'Alex',
    lastName: 'kpot',
    profileImgPath: { triangleImg2 },
    description:
      'Developer, product manager, photographer, content creator, freelancer, and a forever student. I love to build and create things.',
    freelance: false,
    igLink: 'https://www.instagram.com/alexkpot/',
    igName: '@alexkpot',
  }

  const openForWork = () => {
    if (user.freelance) {
      return (
        <p className='ofj-p'>
          <img src={RectangleImgPlus} alt='plus icon' /> Accepting{' '}
          <span>freelance projects</span>
        </p>
      )
    } else {
      return (
        <p className='ofj-p'>
          <img src={RectangleImgMinus} alt='' /> Not accepting{' '}
          <span>freelance projects</span>
        </p>
      )
    }
  }

  return (
    <div>
      <div className='header_container'>
        <div className='user_profile'>
          <img src={userImg} alt='Profile Image' />
        </div>
        <div className='user_description'>
          <h1>
            <span className='h1-s1'>{user.firstName}</span>
            <span className='h1-s2'>{user.lastName}</span>
          </h1>
          <div className='ig_link'>
            <a href='{igLink}' target='_blank' rel='noopener noreferrer'>
              <img className='triangle' src={triangleImg1} alt='triangle' />{' '}
              {user.igName}{' '}
              <img className='triangle' src={triangleImg2} alt='triangle' />
            </a>
          </div>
          <p>
            <b>alexkpot.social@gmail.com</b>
            <br />
            {user.description}
          </p>
          <div className='openForJob'>{openForWork()}</div>
        </div>
      </div>
      <img className='divider' src={lineImg} alt='' />
    </div>
  )
}

export default Header
