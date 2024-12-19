import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Content from './component/Content'
import BelowHero from './component/BelowHero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      <Hero/>
      <BelowHero/>
      <Content/>
      </div>
    </>
  )
}

export default App
