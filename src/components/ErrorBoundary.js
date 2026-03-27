import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h1>Something went wrong.</h1>
          <p>Please refresh the page.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
