import './HeaderStyle.css'
import images from '../data/images'
import RectangleImgPlus from '../assets/images/plus.png'
import RectangleImgMinus from '../assets/images/Rectangle 2@2x.png'
import triangleImg1 from '../assets/images/Polygon 1@2x.png'
import triangleImg2 from '../assets/images/Polygon 2@2x.png'
import lineImg from '../assets/images/Line 3@2x.png'
import minusW from '../assets/images/minusW.svg'
import plusW from '../assets/images/plusW.svg'
import triangleLeft from '../assets/images/triangleLeft.svg'
import triangleRight from '../assets/images/triangleRight.svg'

function Header({ profile, isDarkModeOn }) {
  const triangleLeftSrc = isDarkModeOn ? triangleLeft : triangleImg1
  const triangleRightSrc = isDarkModeOn ? triangleRight : triangleImg2
  const minus = isDarkModeOn ? minusW : RectangleImgMinus
  const plus = isDarkModeOn ? plusW : RectangleImgPlus
  const profileImg = images[profile.profileImage]

  const openForWork = () => {
    if (profile.freelance) {
      return (
        <p className='ofj-p'>
          <img src={plus} alt='plus icon' /> Accepting{' '}
          <span>freelance projects</span>
        </p>
      )
    } else {
      return (
        <p className='ofj-p'>
          <img src={minus} alt='' aria-hidden='true' /> Not accepting{' '}
          <span>freelance projects</span>
        </p>
      )
    }
  }

  return (
    <header>
      <div className='header_container'>
        <div className='user_profile'>
          <img src={profileImg} alt={`${profile.firstName} ${profile.lastName}`} />
        </div>
        <div className='user_description'>
          <h1>
            <span className='h1-s1'>{profile.firstName}</span>
            <span className='h1-s2'>{profile.lastName}</span>
          </h1>
          <div className='ig_link'>
            <a href={profile.social.instagram.url} target='_blank' rel='noopener noreferrer' aria-label='Visit Instagram profile'>
              <img className='triangle' src={triangleLeftSrc} alt='' aria-hidden='true' />{' '}
              {profile.social.instagram.handle}{' '}
              <img className='triangle' src={triangleRightSrc} alt='' aria-hidden='true' />
            </a>
          </div>
          <p>
            <b>{profile.email}</b>
            <br />
            {profile.description}
          </p>
          <div className='openForJob'>{openForWork()}</div>
        </div>
      </div>
      <img className='divider' src={lineImg} alt='' aria-hidden='true' />
    </header>
  )
}

export default Header
