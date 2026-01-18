import React, { useState, useEffect } from 'react'
import './landingpage.css'
import './about.css'

export default function About(){
		const [activeTab, setActiveTab] = useState('apps')

		const apps = [
			{ 
				title: 'Crowdfunding Web App',
				href: 'https://inkvestor2.netlify.app',
				img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
				imgLarge: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&h=1200&fit=crop',
				desc: 'Crowdfunding platform demo',
				what: `A full-stack crowdfunding platform built as part of the She Codes Australia – Django Module. The app allows users to discover projects, pledge funds, and track campaign progress in real time, with a strong focus on clean architecture and real-world workflows.`,
				why: `To complete the She Codes Australia Django module using a production-style project\nTo strengthen my skills in backend development with Django\nTo build a realistic, end-to-end web application from concept to deployment`,
				keyFeatures: [
					'User authentication & profiles',
					'Project creation and campaign management',
					'Secure pledging workflow',
					'Live funding progress indicators',
					'Responsive, mobile-friendly UI'
				],
				techStack: [
					'Backend: Django, Django REST Framework',
					'Frontend: React, JavaScript',
					'Database: PostgreSQL',
					'Payments: Stripe (test mode)',
					'Deployment: Netlify / cloud-hosted backend'
				],
				proud: `Delivering a complete, working product within a structured learning program\nDesigning scalable Django models and REST APIs\nTranslating course requirements into a polished, user-focused app`,
				improvements: `Creator dashboards with analytics\nEmail notifications & activity feed\nAdmin moderation tools`,
				repoFrontend: 'https://github.com/SheCodesAus/boolean-bears_frontend',
				repoBackend: 'https://github.com/SheCodesAus/boolean-bears_backend'
			},
			{ 
				title: 'Yarning Circle',
				href: 'https://yarning-circle.netlify.app',
				img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=500&fit=crop',
				imgLarge: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=1200&fit=crop',
				desc: 'Peer learning platform',
				what: `A peer learning and discussion platform designed to support knowledge sharing through structured conversations. Yarning Circle enables users to create discussion topics, contribute posts, and learn collaboratively in a respectful, community-focused environment.`,
				why: `To explore how digital platforms can support peer-to-peer learning\nTo practice building community-driven features such as discussions and moderation\nTo design a platform with a strong focus on usability and inclusivity`,
				keyFeatures: [
					'User accounts and authentication',
					'Topic-based discussion threads',
					'Commenting and peer engagement',
					'Clean, accessible UI for focused reading and writing',
					'Responsive design for mobile and desktop'
				],
				techStack: [
					'Backend: Django, Django REST Framework',
					'Frontend: React, JavaScript',
					'Database: PostgreSQL',
					'Deployment: Netlify / cloud-hosted backend'
				],
				proud: `Designing a calm, readable interface for long-form discussions\nStructuring Django models for discussions and replies\nBuilding a platform that prioritises learning over noise`,
				improvements: `Upvoting and reputation system\nContent moderation tools\nReal-time updates with WebSockets\nPrivate or invite-only circles`,
			},
			{ title: 'Embodied Carbon Analysis', href: '#', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&h=500&fit=crop', imgLarge: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&h=1200&fit=crop', desc: 'Sustainability & data analysis tool',
				what: `A web-based tool that helps analyse embodied carbon in building materials by calculating carbon impact across different material choices. The project combines engineering knowledge with software development to support more sustainable design decisions.`,
				why: `To bridge my background in Mechanical & Building Services Engineering with software development\nTo explore how data-driven tools can support sustainable design\nTo experiment with turning engineering calculations into usable web applications`,
				keyFeatures: [
					'Material-based embodied carbon calculations',
					'Comparison of alternative material options',
					'Clear presentation of carbon impact data',
					'Simple, engineer-friendly input workflow',
					'Scalable structure for future datasets'
				],
				techStack: [
					'Backend: Django',
					'Frontend: React, JavaScript',
					'Data: Embodied carbon datasets',
					'Deployment: Cloud-hosted'
				],
				proud: `Translating complex engineering concepts into a usable digital tool\nStructuring calculations for accuracy and extensibility\nCreating a meaningful intersection between sustainability and software`,
				improvements: `Visual dashboards and charts\nExpanded material databases\nScenario comparisons across full building elements`,
			},
		]

		const [selectedProject, setSelectedProject] = useState(null)

		function openProject(p){
			setSelectedProject(p)
			try{ document.body.style.overflow = 'hidden' }catch(e){}
		}

		function closeProject(){
			setSelectedProject(null)
			try{ document.body.style.overflow = '' }catch(e){}
		}

		const tools = [
			{ key: 'django', title: 'Django', img: 'https://static.djangoproject.com/img/logos/django-logo-negative.png', imgLarge: 'https://static.djangoproject.com/img/logos/django-logo-negative.png', desc: 'Web framework' },
			{ key: 'python', title: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', imgLarge: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', desc: 'Programming language' },
			{ key: 'js', title: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', imgLarge: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', desc: 'Frontend language' },
			{ key: 'react', title: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', imgLarge: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', desc: 'UI library' },
			{ key: 'aws', title: 'AWS', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', imgLarge: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', desc: 'Cloud services' },
			{ key: 'heroku', title: 'Heroku', img: 'https://images.seeklogo.com/logo-png/45/1/heroku-logo-png_seeklogo-451199.png', imgLarge: 'https://images.seeklogo.com/logo-png/45/1/heroku-logo-png_seeklogo-451199.png', desc: 'App hosting' },
			{ key: 'insomnia', title: 'Insomnia', img: 'https://wp.logos-download.com/wp-content/uploads/2023/02/Insomnia_Logo-3000x798.png', imgLarge: 'https://wp.logos-download.com/wp-content/uploads/2023/02/Insomnia_Logo-3000x798.png', desc: 'API client' },
		]

		const hobbies = [
			{
				title: 'Languages',
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-9Re59O7vm9RMMWP5QXYdWKogKTrMVYGlg&s',
				desc: 'Spanish',
				what: `An ongoing journey to learn Spanish, focused on real-world conversation, travel use, and cultural understanding rather than textbook-only study.`,
				keyFeatures: [
					'Conversational practice and immersion-style learning',
					'Listening to podcasts, music, and videos in Spanish',
					'Learning vocabulary through daily use rather than memorisation'
				],
				proud: `Seeing progress in everyday conversations\nLearning cultural context alongside the language\nThe problem-solving aspect of grammar and structure`,
				improvements: `Confident conversational fluency\nShort-term immersion while travelling\nUsing Spanish naturally in social and professional settings`
			},
			{
				title: 'Sport',
				img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg-fKcOfRylggkVnv8ZRuks12NUiCoLZYSA&s',
				desc: 'Yoga',
				what: `A regular yoga practice that supports both physical health and mental clarity, helping balance a highly analytical, screen-focused lifestyle.`,
				keyFeatures: [
					'Better focus and stress management',
					'Improved body awareness and recovery',
					'A mental reset between deep work sessions'
				],
				proud: `The combination of strength and calm\nThe meditative aspect of controlled movement\nHow it complements problem-solving and creativity`,
				improvements: `Deeper practice in flexibility and balance\nExploring different yoga styles\nMaintaining long-term consistency alongside work`
			},
			{
				title: 'Travel',
				img: 'https://img.freepik.com/free-photo/full-shot-woman-travel-concept_23-2149153259.jpg?semt=ais_hybrid&w=740&q=80',
				desc: '12+ countries',
				what: `Travel as a way to experience new cultures, environments, and perspectives often short trips that maximise learning and exposure.`,
				keyFeatures: [
					'Local food and everyday culture',
					'Walkable cities and nature access',
					'Opportunities to learn, observe, and reflect'
				],
				proud: `Navigating unfamiliar places independently\nLearning through experience rather than guides\nThe creativity and adaptability travel encourages`,
				improvements: `Longer stays rather than short visits\nCombining travel with remote work\nDeeper cultural immersion over sightseeing`
			}
		]

		useEffect(()=>{
			try{
				document.documentElement.classList.add('allow-scroll')
				document.body.classList.add('allow-scroll')
				const root = document.getElementById('root')
				if(root) root.classList.add('allow-scroll')
			}catch(e){}
			return ()=>{
				try{
					document.documentElement.classList.remove('allow-scroll')
					document.body.classList.remove('allow-scroll')
					const root = document.getElementById('root')
					if(root) root.classList.remove('allow-scroll')
				}catch(e){}
			}
		},[])

		return (
				<div>
			<nav class="navbar">
				<div class="navbar-inner">
					<a href="/" class="navbar-home-link">
					<img
					class="navbar-logo"
					src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%230f1724' d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/></svg>"
					alt="Home"
					/>
					</a>
					<div class="navbar-search">
					<input
						type="search"
						class="search-bar"
						placeholder="Don't use me :)"
					/>
					<i class="fa fa-search search-icon"></i>
					</div>
					<div class="navbar-actions">
					<a class="btn-login" href="/#contact">Contact me</a>
					</div>

				</div>
			</nav>

			<header>
				<div className="container">
					<div className="profile">
						<div className="profile-image">
							<img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="profile" />
						</div>
						<div className="profile-user-settings-wrapper"> 
						<div className="profile-user-settings">
							<h1 className="profile-user-name"><a className="profile-user-name-link">Arsen ILHAN</a></h1>
							<a href="https://www.linkedin.com/in/arsenilhan/" target="_blank" rel="noopener noreferrer" className="auth-cta profile-edit-btn">
								<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="18" height="18" style={{marginRight: '0.4rem', verticalAlign: 'middle'}} />
								Follow me
							</a>
						</div>

						<div className="profile-stats">
							<p className="profile-summary">
								<span className="summary-item one-line"><strong>∞</strong>ideas</span>
								<span className="summary-item one-line"><strong>300+</strong> commits</span>
								<span className="summary-item one-line"><strong>3</strong> projects</span>
							</p>
						</div>

						<div className="profile-bio">
							<p><span className="profile-real-name"></span>
							📍 Based in AU
							<br />
							💻 Currently building web tools
							<br />
							🤝 Open to collaborations
							<br />
							I’m Arsen, a Mechanical and Building Services Engineer with a growing focus on backend development and digital product building. 📷✈️🏕️
							</p>
						</div>
						</div>
					</div>
				</div>
			</header>

			<div className="divider-container">
				<hr className="page-divider" />
			</div>

			<main>
				<div className="container">
					<div className="section-tabs">
						<ul className="profile-tabs">
							<li className={`profile-tab ${activeTab==='apps'?'active':''}`}>
								<button type="button" onClick={() => setActiveTab('apps')}>
									<i className="fas fa-th-large tab-icon" />
									<span>Projects</span>
								</button>
							</li>

							<li className={`profile-tab ${activeTab==='tools'?'active':''}`}>
								<button type="button" onClick={() => setActiveTab('tools')}>
									<i className="fas fa-tools tab-icon" />
									<span>Skills</span>
								</button>
							</li>

							<li className={`profile-tab ${activeTab==='hobbies'?'active':''}`}>
								<button type="button" onClick={() => setActiveTab('hobbies')}>
									<i className="fas fa-user-circle tab-icon" />
									<span>Hobbies</span>
								</button>
							</li>
						</ul>
					</div>

					<div className="gallery">
						{activeTab === 'apps' && apps.map((it, i) => (
							<div key={i} className="gallery-item">
								<a href={it.href} onClick={(e)=>{e.preventDefault(); openProject(it)}}>
									<img src={it.img} className="gallery-image" alt={it.title} />
									<div className="details">
										<span className="title">{it.title}</span>
										<span className="info">{it.desc}</span>
									</div>
								</a>
							</div>
						))}

						{activeTab === 'tools' && tools.map((t, i) => (
							<div key={t.key} className="gallery-item">
								<a href="#" onClick={(e)=>{e.preventDefault(); openProject({title:t.title,img:t.img,imgLarge:t.imgLarge,desc:t.desc})}}>
									<div className="gallery-image" style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#fff'}}>
										<img src={t.img} alt={t.title} style={{maxWidth:'80%',maxHeight:'80%'}} />
									</div>
									<div className="details">
										<span className="title">{t.title}</span>
										<span className="info">{t.desc}</span>
									</div>
								</a>
							</div>
						))}

						{activeTab === 'hobbies' && hobbies.map((it, i) => (
								<div key={i} className="gallery-item">
									<a href="#" onClick={(e)=>{e.preventDefault(); openProject({...it, imgLarge: it.img})}}>
										<img src={it.img} className="gallery-image" alt={it.title} />
										<div className="details">
											<span className="title">{it.title}</span>
											<span className="info">{it.desc || it.title}</span>
										</div>
									</a>
								</div>
							))}
					</div>
				</div>
			</main>
					{selectedProject && (
						<div className="modal-backdrop" onClick={closeProject}>
							<div className="modal-content" onClick={(e)=>e.stopPropagation()}>
								<button className="modal-close" onClick={closeProject}>✕</button>
								<div className="modal-grid">
									<img src={selectedProject.imgLarge || selectedProject.img} alt={selectedProject.title} className="modal-image" />
									<div className="modal-body">
										<h2>{selectedProject.title}</h2>
										{selectedProject.desc && <p className="modal-subtitle">{selectedProject.desc}</p>}
										{selectedProject.what && (
											<>
												<h3>What it is</h3>
												<p>{selectedProject.what}</p>
											</>
										)}
										{selectedProject.why && (
											<>
												<h3>Why I built it</h3>
												<p>{selectedProject.why}</p>
											</>
										)}
										{selectedProject.keyFeatures && (
											<>
												<h3>Key features</h3>
												<ul>
													{selectedProject.keyFeatures.map((kf, idx) => <li key={idx}>{kf}</li>)}
												</ul>
											</>
										)}
										{selectedProject.techStack && (
											<>
												<h3>Tech stack</h3>
												{Array.isArray(selectedProject.techStack) ? (
													<ul>
														{selectedProject.techStack.map((t, i) => <li key={i}>{t}</li>)}
													</ul>
												) : (
													<p>{selectedProject.techStack}</p>
												)}
											</>
										)}
										{selectedProject.proud && (
											<>
												<h3>What I’m proud of</h3>
												<p>{selectedProject.proud}</p>
											</>
										)}
										{selectedProject.improvements && (
											<>
												<h3>What I’d improve next</h3>
												<p>{selectedProject.improvements}</p>
											</>
										)}
										<div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap',marginTop:'0.75rem'}}>
											{selectedProject.href && <a href={selectedProject.href} target="_blank" rel="noreferrer" className="btn-login">🔗 Open live demo</a>}
											{selectedProject.repoFrontend && <a href={selectedProject.repoFrontend} target="_blank" rel="noreferrer" className="btn-login">📂 Frontend source</a>}
											{selectedProject.repoBackend && <a href={selectedProject.repoBackend} target="_blank" rel="noreferrer" className="btn-login">📂 Backend source</a>}
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
		</div>
	)
}
