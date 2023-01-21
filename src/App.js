import Header from './components/Header'
import Links from './components/Links'
import Footer from './components/Footer'
import itemsData from './components/items/itemsData'
import useLocalStorage from 'use-local-storage'

function App() {
  const itemsDataList = itemsData
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className='app' data-theme={theme}>
      <button onClick={switchTheme}>switch theme</button>
      <Header />
      <Links items={itemsDataList} />
      <Footer />
    </div>
  )
}

export default App
