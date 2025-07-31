import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import './App.css'
import nithinImg from './assets/Screenshot_2024-03-18_203427-removebg-preview.png'

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">Portfolio</div>
          <div className="nav-links">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">B.Nithin Kumar Reddy</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer | Machine Learning Enthusiast</p>
            <p className="hero-description">
              Innovative and goal-oriented professional skilled in Java, Python, HTML, CSS, and JavaScript. 
              Experienced in building responsive user interfaces and integrating machine learning models. 
              Dedicated to continuous improvement and delivering high-quality, scalable solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="hero-photo">
                <img src={nithinImg} alt="B.Nithin Kumar Reddy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate developer from Kadapa, Andhra Pradesh, currently pursuing B.Tech in Computer Science & Engineering at Madanapalle Institute of Technology & Science (CGPA: 9.15). 
                I love creating meaningful digital experiences and solving real-world problems with technology.
              </p>
              <p>
                My interests include frontend development, machine learning, and participating in hackathons and coding challenges. 
                I enjoy watching motovlogs and playing games in my free time.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">2022-2026</div>
                  <div className="stat-label">B.Tech Session</div>
                </div>
                <div className="stat">
                  <div className="stat-number">9.15</div>
                  <div className="stat-label">Current CGPA</div>
                </div>
                <div className="stat">
                  <div className="stat-number">94%</div>
                  <div className="stat-label">Intermediate</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src={nithinImg} 
                alt="B.Nithin Kumar Reddy" 
                style={{
                  width: "220px",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "50% / 40%",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  filter: "brightness(0.85)"
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-tree">
            <ul>
              <li>
                <span className="edu-level">B.Tech (2022-2026)</span>
                <ul>
                  <li>
                    <span className="edu-detail">Madanapalle Institute of Technology & Science</span>
                    <span className="edu-detail">CGPA: 9.15</span>
                  </li>
                </ul>
              </li>
              <li>
                <span className="edu-level">Intermediate</span>
                <ul>
                  <li>
                    <span className="edu-detail">Percentage: 94%</span>
                  </li>
                </ul>
              </li>
              <li>
                <span className="edu-level">SSC</span>
                <ul>
                  <li>
                    <span className="edu-detail">School Name (Add your school)</span>
                    <span className="edu-detail">Year (Add year)</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skills-list">
                {['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'].map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '90%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks & Tools</h3>
              <div className="skills-list">
                {['Node.js', 'Express.js', 'MongoDB', 'Git', 'Docker'].map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '85%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Other Interests</h3>
              <div className="skills-list">
                {['Frontend Development', 'Machine Learning'].map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{width: '80%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {[
              {
                title: "Smart To Do",
                description: "A fullstack Smart To Do website with secure user authentication, task management, and automated email alerts. Built using Node.js, Express, MongoDB, JavaScript, and deployed on Render.",
                tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Python", "Node.js"],
                image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                demo: "https://smart-to-do-ybtx.onrender.com"
              },
              {
                title: "Breast Cancer Detection",
                description: "Used the Wisconsin dataset to predict cancerous and non-cancerous cases using Naive Bayes classifier. Responsible for data preprocessing and model training.",
                tech: ["Python", "Machine Learning"],
                image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                demo: "https://github.com/nithinreddy9618/Breast-cancer-prediction-using-ml/blob/main/Team4_Final_29-11-24.ipynb"
              },
              {
                title: "Portfolio Website",
                description: "Personal portfolio website built with React to showcase my skills, projects, and contact information. Designed for responsiveness and a smooth user experience.",
                tech: ["React", "JavaScript", "CSS", "Frontend"],
                image: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
                demo: "https://your-portfolio-demo-url.com"
              }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image" style={{background: project.image}}>
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="btn btn-demo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{marginTop: '10px', display: 'inline-block'}}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <span>bayupureddynithinkumarreddy@gmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <span>+91 9618219896</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <span>Kadapa, Andhra Pradesh, India</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🔗</div>
                  <span>
                    <a href="https://www.linkedin.com/in/nithin-kumar-redddy-7496b272" target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Your message..." rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 B.Nithin Kumar Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
