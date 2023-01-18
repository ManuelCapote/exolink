import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <div className='main_container'>
      <App />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
