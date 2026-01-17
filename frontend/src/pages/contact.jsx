import React from 'react'
import './landingpage.css'
import './contact.css'

export default function Contact(){
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="map-column">
          <div className="map-wrap">
            <iframe title="map" className="map-iframe" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=London+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>
          </div>
          <div className="contact-info">
            <div className="info-block">
              <h3>ADDRESS</h3>
              <p>123 Main Street, London, UK</p>
            </div>
            <div className="info-block">
              <h3>EMAIL</h3>
              <a href="mailto:your@email.com">your@email.com</a>
              <h3>LINKEDIN</h3>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
              <h3>PHONE</h3>
              <a href="tel:123-456-7890">123-456-7890</a>
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
