import React from 'react'

import { useStore } from 'store/store'

const Home = () => {
  const { count, decrement } = useStore()
  return (
    <div>
      {count}
      <button onClick={decrement}>Decrement from Cadastro</button>
    </div>
  )
}

export default Home
