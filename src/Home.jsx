import { useState } from 'react'
import './Home.css'

import Header from './components/Header'
import Main from './components/Main'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-inteiro'>
        <Header/>
        <Main/>
    </div>
  )
}

export default Home
