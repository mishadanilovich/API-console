import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeHoc } from './hoc'

ReactDOM.render(
  <React.StrictMode>
    <ThemeHoc>
      <App />
    </ThemeHoc>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
