import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import { AppProvider } from './Providers/AppProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
)
