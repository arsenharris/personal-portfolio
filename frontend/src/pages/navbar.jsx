import React from 'react'
import './landingpage.css'
import './navbar.css'

export default function Navbar({ setRoute }){
  const navigate = (r) => {
    window.location.hash = r
    setRoute(r)
  }

  return (
    <header className="lp-header">
      <div className="brand">
        <button onClick={() => navigate('/')} className="logo" aria-label="Home" style={{background:'transparent',border:'none',color:'inherit',cursor:'pointer'}}>Arsen</button>
      </div>
      <nav className="lp-nav">
        <button onClick={() => navigate('/about')} className="nav-link">About</button>
        <button onClick={() => navigate('/projects')} className="nav-link">Project</button>
        <button onClick={() => navigate('/contact')} className="nav-link">Contact</button>
      </nav>
    </header>
  )
}
