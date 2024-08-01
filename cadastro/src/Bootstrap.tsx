import React from 'react'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'

import { StoreProvider } from 'store/store'

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
)
