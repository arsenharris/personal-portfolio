import React, { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import LandingPage from './pages/landingpage.jsx'
import About from './pages/about.jsx'

import './pages/landingpage.css'
import './pages/about.css'

function Root(){
  const [route, setRoute] = useState(() => window.location.hash.replace('#','') || 'landing')

  useEffect(()=>{
    const onHash = ()=> setRoute(window.location.hash.replace('#','') || 'landing')
    window.addEventListener('hashchange', onHash)
    return ()=> window.removeEventListener('hashchange', onHash)
  },[])

  const renderRoute = () => {
    switch(route){
      case 'about': return <About />
      case 'landing':
      default:
        return <LandingPage />
    }
  }

  return (
    <div>
      {renderRoute()}
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
