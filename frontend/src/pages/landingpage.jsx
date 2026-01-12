import React, {useState} from 'react'
import './landingpage.css'

export default function LandingPage(){
	return (
		<div className="landing-page-root">
			<div className="hero-inner container card">
				
				<div className="hero-content">
					<div className="container__item landing-page-container">
						<div className="content__wrapper">
							<div className="ellipses-container">
								<h1 className="greeting">Hello</h1>
									<a href="#about" aria-label="About Arsen"> <img className="profile-center" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60&auto=format&fit=crop" alt="Arsen avatar" /></a>
								<div className="ellipses ellipses__outer--thin">
									<div className="ellipses ellipses__orbit" />
								</div>
								<div className="ellipses ellipses__outer--thick" />
							</div>
						</div>
					</div>
				</div>

				<div className="profile-wrap">
					<div className="side-block left">
						<div className="side-label left neon">Developer</div>
					</div>
					<div className="side-block right">
						<div className="side-label right neon">Mechanical Engineer</div>
						{/* <div className="side-explain muted">I've been designing HVAC services for building in the past 6 years.  </div> */}
					</div>
				</div>
			</div>
		</div>
	)
}
