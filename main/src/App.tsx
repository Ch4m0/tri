import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StoreProvider, useStore } from 'store/store'

import './index.css'

const RemoteLoginApp = React.lazy(() => import('login/App'))
const RemoteCadastroApp = React.lazy(() => import('cadastro/App'))

const App = () => {
  const { count, increment } = useStore()

  return (
    <div className="container">
      <h1>CONTAINER {count}</h1>
      <button onClick={increment}>Increment from Container</button>
      <Routes>
        {/* Cadastro APP */}
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RemoteCadastroApp />
            </Suspense>
          }
        ></Route>

        {/* Login APP */}
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
}

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
)
