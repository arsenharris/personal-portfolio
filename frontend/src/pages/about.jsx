import React from 'react'
import './landingpage.css'
import './about.css'

export default function About(){
	return (
		<div>
			<header>
				<div className="container">
					<div className="profile">
						<div className="profile-image">
							<img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="profile" />
						</div>
						<div className="profile-user-settings-wrapper"> 
						<div className="profile-user-settings">
							<h1 className="profile-user-name"><a href="/" className="profile-user-name-link">Arsen ILHAN</a></h1>
							<a href="/#contact" className="btn profile-edit-btn">Contact me</a>
						</div>

						<div className="profile-stats">
							<p className="profile-summary">
								<span className="summary-item"><span className="summary-icon">📍</span>Based in AU</span>
								<span className="summary-item"><span className="summary-icon">💻</span>Currently building web tools</span>
								<span className="summary-item"><span className="summary-icon">🤝</span>Open to collaborations</span>
							</p>
						</div>

						<div className="profile-bio">
							<p><span className="profile-real-name"></span> I’m Arsen, a Mechanical and Building Services Engineer with a growing focus on backend development and digital product building. 📷✈️🏕️
							</p>
						</div>
						</div>
					</div>
				</div>
			</header>

			<main>
				<div className="container">
					<div className="gallery">
						<div className="gallery-item" >
							<a href="https://inkvestor2.netlify.app" target="_blank" rel="noreferrer">
								<img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop" className="gallery-image" alt="book" />
								<div className="gallery-item-info">

									<h2> Crowdfunding Web App</h2>
									<div className="gallery-tech" aria-hidden>
										<span className="tech-badge tech-django">Django</span>
										<span className="tech-badge tech-python">Python</span>
										<span className="tech-badge tech-js">JavaScript</span>
										<span className="tech-badge tech-react">React</span>
									</div>
								</div>
							</a>
						</div>

						<div className="gallery-item" >
							<a href="https://yarning-circle.netlify.app" target="_blank" rel="noreferrer">
								<img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=500&fit=crop" className="gallery-image" alt="learning" />
								<div className="gallery-item-info">

									<h2> Yarning Circle</h2>
									<div className="gallery-tech" aria-hidden>
										<span className="tech-badge tech-django">Django</span>
										<span className="tech-badge tech-python">Python</span>
										<span className="tech-badge tech-js">JavaScript</span>
										<span className="tech-badge tech-react">React</span>
										<span className="tech-badge tech-aws">AWS</span>
									</div>
								</div>
							</a>
						</div>

						<div className="gallery-item" >
							<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&h=500&fit=crop" className="gallery-image" alt="sustainability" />
							<div className="gallery-item-info">

								<h2> Embodied Carbon Analysis</h2>
								<div className="gallery-tech" aria-hidden>
									<span className="tech-badge tech-django">Django</span>
									<span className="tech-badge tech-python">Python</span>
									<span className="tech-badge tech-js">JavaScript</span>
									<span className="tech-badge tech-react">React</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
