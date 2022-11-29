import Header from './components/Header'
import Links from './components/Links'
import itemsData from './components/items/itemsData'

function App() {
  const itemsDataList = itemsData

  return (
    <div>
      <Header />
      <Links items={itemsDataList} />
    </div>
  )
}

export default App
