import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import AppProvider from './AppProvider'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
