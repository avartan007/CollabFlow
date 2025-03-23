import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome name="john"/>
      <Welcome name="Doe"/>
       
    </>
  )
}

export default App
