import { useState } from 'react'
import { useEffect } from 'react'

import './HeaderStyle.css'
import RectangleImgPlus from '../assets/images/plus.png'
import RectangleImgMinus from '../assets/images/Rectangle 2@2x.png'
import userImg from '../assets/images/user-img@2x.png'
import triangleImg1 from '../assets/images/Polygon 1@2x.png'
import triangleImg2 from '../assets/images/Polygon 2@2x.png'
import lineImg from '../assets/images/Line 3@2x.png'
import minusW from '../assets/images/minusW.svg'
import plusW from '../assets/images/plusW.svg'
import triangleLeft from '../assets/images/triangleLeft.svg'
import triangleRight from '../assets/images/triangleRight.svg'
// Assets Import

function Header(props) {
  const isDarkModeOn = props.isDarkModeOn
  const [triangleLeftSrc, setTriangleLeftSrc] = useState(triangleImg1)
  const [triangleRightSrc, setTriangleRightSrc] = useState(triangleImg2)
  const [minus, setMinus] = useState(RectangleImgMinus)
  const [plus, setPlus] = useState(RectangleImgPlus)

  const user = {
    firstName: 'Alex',
    lastName: 'kpot',
    profileImgPath: { userImg },
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
          <img src={plus} alt='plus icon' /> Accepting{' '}
          <span>freelance projects</span>
        </p>
      )
    } else {
      return (
        <p className='ofj-p'>
          <img src={minus} alt='' /> Not accepting{' '}
          <span>freelance projects</span>
        </p>
      )
    }
  }

  const handleDarkMode = () => {
    if (isDarkModeOn) {
      setMinus(minusW)
      setPlus(plusW)
      setTriangleLeftSrc(triangleLeft)
      setTriangleRightSrc(triangleRight)
    } else {
      setMinus(RectangleImgMinus)
      setPlus(RectangleImgPlus)
      setTriangleLeftSrc(triangleImg1)
      setTriangleRightSrc(triangleImg2)
    }
  }

  useEffect(() => {
    handleDarkMode()
  }, [isDarkModeOn])

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
              <img className='triangle' src={triangleLeftSrc} alt='triangle' />{' '}
              {user.igName}{' '}
              <img className='triangle' src={triangleRightSrc} alt='triangle' />
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
