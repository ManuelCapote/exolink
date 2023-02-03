import Header from './components/Header'
import Links from './components/Links'
import Footer from './components/Footer'
import itemsData from './components/items/itemsData'
import useLocalStorage from 'use-local-storage'
import toggleThemeWhite from './assets/images/darkModeToggleOff.svg'
import toggleThemeDark from './assets/images/darkModeToggleOn.svg'
import { useState } from 'react'

function App() {
  const itemsDataList = itemsData
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )
  const [themeToggle, setThemeToggle] = useState(
    theme === 'dark' ? toggleThemeDark : toggleThemeWhite
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setThemeToggle(newTheme === 'dark' ? toggleThemeDark : toggleThemeWhite)
  }

  return (
    <div className='app' data-theme={theme}>
      <div className='content'>
        <button className='toggleBtn' onClick={switchTheme}>
          <img src={themeToggle} alt='' />
        </button>
        <Header isDarkModeOn={theme === 'light' ? false : true} />
        <Links items={itemsDataList} />
      </div>
      <Footer />
    </div>
  )
}

export default App
