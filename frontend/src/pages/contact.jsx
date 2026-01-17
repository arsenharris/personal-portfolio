import React from 'react'
import './landingpage.css'
import './contact.css'

export default function Contact(){
  return (
    <section id="contact" className="contact-section">
      <h3 className="map-title pill-style">Contact Me</h3>
      <div className="contact-container">
        <div className="map-column">
          <div className="map-wrap">
            <iframe title="map" className="map-iframe" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Australia&amp;ie=UTF8&amp;t=&amp;z=4&amp;iwloc=B&amp;output=embed" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>
          </div>
          <div className="contact-info">
            <div className="info-block">
              <h3>ADDRESS</h3>
              <p>Milky Way Galaxy, please find me</p>
            </div>
            <div className="info-block">
              <h3>EMAIL</h3>
              <a href="mailto:arsenilhan@outlook.es">arsenilhan@outlook.es</a>
              <h3>LINKEDIN</h3>
              <a href="https://www.linkedin.com/in/arsenilhan/" target="_blank" rel="noopener noreferrer">linkedin.com/in/arsenilhan</a>
            </div>
          </div>
        </div>

        <div className="form-column">
          <h2 className="form-title">Get in Touch</h2>
          <p className="form-sub">Have questions, suggestions, or just want to say hello? We'd love to hear from you! Drop us a message and we'll get back to you as soon as possible.</p>
          <form action="https://formspree.io/f/xqabdyln" method="POST" className="contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6"></textarea>

            <div className="form-actions">
              <button type="submit" className="btn submit-btn">Submit</button>
              <a className="btn back-btn" href="/#landing">Back to Landing</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
