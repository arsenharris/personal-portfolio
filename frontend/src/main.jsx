import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import LandingPage from './pages/landingpage.jsx'
import About from './pages/about.jsx'
import Projects from './pages/projects.jsx'
import Contact from './pages/contact.jsx'
import Navbar from './pages/navbar.jsx'

import './pages/landingpage.css'
import './pages/about.css'
import './pages/projects.css'
import './pages/contact.css'

function Nav({ setRoute }){
  const navigate = (r) => {
    window.location.hash = r
    setRoute(r)
  }

  return (
    <header className="lp-header">
      <div className="brand"><div className="logo">Arsen</div></div>
      <nav className="lp-nav">
        <button onClick={() => navigate('/')} className="nav-link">Home</button>
        <button onClick={() => navigate('/about')} className="nav-link">About</button>
        <button onClick={() => navigate('/projects')} className="nav-link">Portfolio</button>
        <button onClick={() => navigate('/contact')} className="nav-link">Contact</button>
      </nav>
    </header>
  )
}

function Root(){
  const getRoute = () => (window.location.hash ? window.location.hash.replace('#','') : '/')
  const [route, setRoute] = useState(getRoute())

  useEffect(()=>{
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  },[])

  let Active = LandingPage
  if(route === '/about') Active = About
  if(route === '/projects') Active = Projects
  if(route === '/contact') Active = Contact

  return (
    <div>
      <Navbar setRoute={setRoute} />
      <main>
        <Active />
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
