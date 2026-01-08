import React, {useState} from 'react'
import './landingpage.css'

export default function Contact(){
  const [message, setMessage] = useState('')

  const sendMail = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio inquiry')
    const body = encodeURIComponent(message)
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="container" style={{paddingTop:92}}>
      <section className="card">
        <h2>Contact</h2>
        <p className="muted">Prefer email? Use the form below or send directly to <a href="mailto:you@example.com">you@example.com</a>.</p>
        <form onSubmit={sendMail} style={{display:'grid',gap:8,marginTop:12}}>
          <input placeholder="Subject" aria-label="subject" />
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message (short)" rows={6} />
          <div style={{display:'flex',gap:8}}>
            <button className="btn" type="submit">Email me</button>
            <a className="btn ghost" href="mailto:you@example.com">Open Mail</a>
          </div>
        </form>
      </section>
    </div>
  )
}
