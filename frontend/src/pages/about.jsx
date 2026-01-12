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

						<div className="profile-user-settings">
							<h1 className="profile-user-name">Arsen ILHAN</h1>
							<a href="#contact" className="btn profile-edit-btn">Contact me</a>
						</div>

						<div className="profile-stats">
							<ul>
								<li><span className="profile-stat-count">164</span> posts</li>
								<li><span className="profile-stat-count">188</span> followers</li>
								<li><span className="profile-stat-count">206</span> following</li>
							</ul>
						</div>

						<div className="profile-bio">
							<p><span className="profile-real-name">Jane Doe</span> I’m Arsen, a Mechanical and Building Services Engineer with a growing focus on backend development and digital product building. 📷✈️🏕️</p>
						</div>
					</div>
				</div>
			</header>

			<main>
				<div className="container">
					<div className="gallery">
						{/* A few sample gallery items (you can add/remove) */}
						<div className="gallery-item" >
							<img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-info">
								<ul>
									<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span>❤️ 56</li>
									<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span>💬 2</li>
								</ul>
                <h2> CrowdFunding Project</h2>
							</div>
						</div>

						<div className="gallery-item" >
							<img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-info">
								<ul>
									<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span>❤️ 89</li>
									<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span>💬 5</li>
								</ul>
                <h2> CrowdFunding Project</h2>
							</div>
						</div>

						<div className="gallery-item" >
							<img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt="" />
							<div className="gallery-item-info">
								<ul>
									<li className="gallery-item-likes"><span className="visually-hidden">Likes:</span>❤️ 42</li>
									<li className="gallery-item-comments"><span className="visually-hidden">Comments:</span>💬 1</li>
								</ul>
                <h2> CrowdFunding Project</h2>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
