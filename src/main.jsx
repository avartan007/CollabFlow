import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './Components/LandingPage.jsx'
import Navbar from './Components/Navbar.jsx'
import Counter from './Components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
     <LandingPage/>
     <Navbar/>
     <Counter/>
  </StrictMode>,
)
