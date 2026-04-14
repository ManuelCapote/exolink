'use client'

import { useEffect, useState } from 'react'
import Header from './components/Header'
import Links from './components/Links'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import sections from './data/sections.json'
import profile from './data/profile.json'
import useLocalStorage from 'use-local-storage'

function App() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme((prev) => prev || 'dark')
    }
  }, [setTheme])

  const isDarkMode = theme === 'dark'
  const themeToggle = isDarkMode ? '/images/darkModeToggleOn.svg' : '/images/darkModeToggleOff.svg'

  const switchTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark')
  }

  return (
    <div className='app' data-theme={mounted ? theme : 'light'}>
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
