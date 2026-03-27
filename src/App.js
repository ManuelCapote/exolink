import Header from './components/Header'
import Links from './components/Links'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import sections from './data/sections.json'
import profile from './data/profile.json'
import useLocalStorage from 'use-local-storage'
import toggleThemeWhite from './assets/images/darkModeToggleOff.svg'
import toggleThemeDark from './assets/images/darkModeToggleOn.svg'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const isDarkMode = theme === 'dark'
  const themeToggle = isDarkMode ? toggleThemeDark : toggleThemeWhite

  const switchTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  return (
    <div className='app' data-theme={theme}>
      <main className='content'>
        <button className='toggleBtn' onClick={switchTheme} aria-label='Toggle dark mode'>
          <img src={themeToggle} alt='Toggle dark mode' />
        </button>
        <Header profile={profile} isDarkModeOn={isDarkMode} />
        <Links sections={sections} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
