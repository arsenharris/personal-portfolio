import React, {useState} from 'react'
import './landingpage.css'

export default function LandingPage(){
	return (
		<div className="hero-inner container card">
			<div className="hero-content">
				<div className="container__item landing-page-container">
						<div className="ellipses-container">
							<h1 className="greeting">Hello</h1>
								<a href="#about" aria-label="About Arsen"> <img className="profile-center" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60&auto=format&fit=crop" alt="Arsen avatar" /></a>
							<div className="ellipses ellipses__outer--thin">
								{/* <div className="ellipses ellipses__orbit" /> */}
							</div>
							<div className="ellipses ellipses__outer--thick" />
						</div>
				</div>
			</div>
		</div>
	)
}
