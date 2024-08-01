import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

const RemoteLoginApp = React.lazy(() => import('login/App'))

const App = () => (
  <div className="container">
    <h1>MAIn</h1>
    <Routes>
      <Route path="/" element={<h1>HOME</h1>}></Route>
      <Route
        path="/login/*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <RemoteLoginApp />
          </Suspense>
        }
      ></Route>
      <Route path="*" element={<h1>404</h1>}></Route>
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
