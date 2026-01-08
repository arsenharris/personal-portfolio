import React, {useState} from 'react'
import './landingpage.css'

const demoSamples = [
	{ id: 'd1', title: 'Landing page perf audit', note: '60s video showing Lighthouse wins and image optimizations', link: '#' },
	{ id: 'd2', title: 'Signup flow accessibility', note: 'Short demo with screen reader flow + fixes', link: '#' },
]

export default function LandingPage(){
	const [demos] = useState(demoSamples)
	const [showTemplate, setShowTemplate] = useState(false)

	const copyToClipboard = async (text) => {
		try {
			await navigator.clipboard.writeText(text)
			alert('Link copied to clipboard')
		} catch (e) {
			alert('Could not copy — please copy manually')
		}
	}

	return (
		<div className="lp-root">


			<main className="lp-main container">
				<section className="hero">
					<div className="hero-bg" aria-hidden="true"></div>
					<div className="hero-inner container card">
						<div className="profile-wrap">
							<div className="side-block left">
								<div className="side-label left">Backend</div>
								<div className="side-explain muted">I ship end-to-end products — from prototyping to performant web tools.</div>
							</div>
							<img className="profile-img" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60&auto=format&fit=crop" alt="Arsen avatar" />
							<div className="side-block right">
								<div className="side-label right">Mechanical Engineer</div>
								<div className="side-explain muted">Building services Engineer by day</div>
							</div>
						</div>
						<div className="hero-content">
							<h2>Arsen — I create impactful tools that reduce embodied carbon and improve user experiences.</h2>
							<p className="muted">Interactive micro-demos and recruiter-friendly case studies — quick to review at a showcase.</p>
							<div className="hero-ctas">
								<a className="btn" href="#projects">See My Projects</a>
								<a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
