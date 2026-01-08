import React from 'react'
import './landingpage.css'

const projects = [
  { id: 'p1', name: 'Embodied Carbon Calculator', impact: 'Estimates and reduces embodied carbon for product designs', tech: ['React','Node'], demo: '#', code: '#' },
  { id: 'p2', name: '2FA Showcase', impact: 'Demonstrates secure 2FA flows and usability', tech: ['React','Auth0'], demo: '#', code: '#' },
  { id: 'p3', name: 'Company-specific micro-demo', impact: 'Small, targeted demo for outreach', tech: ['JS','HTML'], demo: '#', code: '#' },
]

export default function Projects(){
  return (
    <div className="container" style={{paddingTop:92}}>
      <section className="card">
        <h2>Portfolio</h2>
        <p className="muted">Featured projects with short demos and links to deeper audits or code.</p>

        <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:12}}>
          {projects.map(p => (
            <article key={p.id} className="card">
              <h4>{p.name}</h4>
              <div className="muted small">{p.impact}</div>
              <div style={{marginTop:8}}>
                {p.tech.map(t => <span key={t} style={{display:'inline-block',background:'rgba(255,255,255,0.03)',padding:'4px 8px',borderRadius:6,marginRight:6,fontSize:12}}>{t}</span>)}
              </div>
              <div style={{marginTop:12,display:'flex',gap:8}}>
                <a className="btn" href={p.demo} target="_blank" rel="noreferrer">1-Min Demo</a>
                <a className="btn ghost" href={p.code} target="_blank" rel="noreferrer">Code / Audit</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
