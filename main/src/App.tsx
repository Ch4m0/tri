import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

//const Login = React.lazy(() => import('login/App'))
import LoginApp from 'login/App'

const App = () => (
  <div className="container">
    <Routes>
      <Route path="/login" element={<LoginApp />}></Route>
    </Routes>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
