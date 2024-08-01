import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './index.css'
import LoginPage from './Home'

const App = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
  </Routes>
)

export default App
