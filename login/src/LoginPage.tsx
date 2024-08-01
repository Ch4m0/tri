import React from 'react'

import { useStore } from 'store/store'

const LoginPage = () => {
  const { count, clear } = useStore()

  return (
    <div>
      This is Login
      {count}
      <button onClick={clear}>Clear from Login</button>
    </div>
  )
}

export default LoginPage
