import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import './index.css'
import LoginPage from './LoginPage'

const App = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
  </Routes>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
