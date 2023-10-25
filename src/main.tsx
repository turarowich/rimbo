import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components'
import { ThemeProvider } from 'providers'

import './assets/fonts/Inter-Light.ttf'
import './assets/fonts/Inter-Regular.ttf'
import './assets/fonts/Inter-Medium.ttf'
import './assets/fonts/Inter-SemiBold.ttf'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
