import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <div className='main_container'>
        <App />
      </div>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
