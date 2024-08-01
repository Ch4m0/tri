import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './index.css'
import HomePage from './HomePage'

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
)

export default App
