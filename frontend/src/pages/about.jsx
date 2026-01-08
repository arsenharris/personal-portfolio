import React from 'react'
import './landingpage.css'
import './about.css'

export default function About(){
  return (
    <div className="container" style={{paddingTop:92}}>
      <section className="card">
        <h2>About — Who I am</h2>
        <p className="muted">I build end-to-end products with an emphasis on performance, accessibility and measurable impact. I bridge software and mechanical engineering to create practical solutions.</p>

        <div className="about-grid" style={{marginTop:12}}>
          <div className="about-photos">
            {/* Replace these with your own photos when ready */}
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60&auto=format&fit=crop" alt="photo1" />
            <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&q=60&auto=format&fit=crop" alt="photo2" />
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=60&auto=format&fit=crop" alt="photo3" />
          </div>

          <div className="about-info">
            <h4>Skills — Development</h4>
            <ul className="skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>Python / Django</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>AWS</li>
              <li>Insomnia</li>
              <li>CI/CD</li>
            </ul>

            <h4>Fun facts</h4>
            <ul>
              <li>I come from a mechanical engineering background — I prototype hardware and software.</li>
              <li>I enjoy measuring and reducing embodied carbon in product designs.</li>
              <li>I like to present complex ideas as short demos recruiters can quickly review.</li>
            </ul>

            <h4>I featured on</h4>
            <ul className="featured">
              <li><a href="https://example.com" target="_blank" rel="noreferrer">WSP — Featured project</a></li>
              <li><a href="https://example.com" target="_blank" rel="noreferrer">CIBSE — Mention</a></li>
              <li><a href="https://example.com" target="_blank" rel="noreferrer">Another Publication</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
