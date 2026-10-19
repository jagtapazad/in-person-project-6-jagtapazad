import { useEffect } from 'react'
import './App.css'

function App() {
  // ============================================
  // PART 4: EVENT HANDLERS (migrated from Week 6 script.js)
  // ============================================

  // Smooth scroll: the link names the section it should scroll to
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close the mobile menu after picking a destination
    document.querySelector('.nav-menu').classList.remove('active');
    document.querySelector('.nav-toggle').classList.remove('active');
  };

  // Show the cards in the chosen category, hide the rest
  const handleFilterClick = (e) => {
    const filterValue = e.currentTarget.getAttribute('data-filter');

    document.querySelectorAll('.project-card').forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Only the clicked button stays active
    document.querySelectorAll('.filter-btn').forEach(btn =>
      btn.classList.remove('active')
    );
    e.currentTarget.classList.add('active');
  };

  // Slide the mobile menu in and out
  const handleMobileMenuToggle = () => {
    document.querySelector('.nav-menu').classList.toggle('active');
    document.querySelector('.nav-toggle').classList.toggle('active');
  };

  // ---------- form validation ----------
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showError = (input, message) => {
    clearError(input);
    const error = document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    input.classList.add('error');
    input.classList.remove('success');
    input.parentElement.appendChild(error);
  };

  const clearError = (input) => {
    const error = input.parentElement.querySelector('.error-message');
    if (error) {
      error.remove();
    }
    input.classList.remove('error');
  };

  const showSuccess = (input) => {
    clearError(input);
    input.classList.add('success');
    input.classList.remove('error');
  };

  // One rule per field, reused by the live check and the submit check
  const validateName = () => {
    const nameInput = document.querySelector('#name');
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, 'Name must be at least 2 characters');
      return false;
    }
    showSuccess(nameInput);
    return true;
  };

  const validateEmail = () => {
    const emailInput = document.querySelector('#email');
    if (!isValidEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address');
      return false;
    }
    showSuccess(emailInput);
    return true;
  };

  const validateMessage = () => {
    const messageInput = document.querySelector('#message');
    if (messageInput.value.trim().length < 10) {
      showError(messageInput, 'Message must be at least 10 characters');
      return false;
    }
    showSuccess(messageInput);
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Run every check, so all problems show at once
    const nameOk = validateName();
    const emailOk = validateEmail();
    const messageOk = validateMessage();

    if (nameOk && emailOk && messageOk) {
      const form = e.currentTarget;
      const successMsg = document.createElement('div');
      successMsg.className = 'success-message';
      successMsg.textContent = 'Thank you! Your message has been sent successfully.';
      form.appendChild(successMsg);

      setTimeout(() => {
        form.reset();
        successMsg.remove();
        document.querySelectorAll('.success').forEach(input =>
          input.classList.remove('success')
        );
      }, 3000);
    }
  };

  // Highlight the nav link of whichever section is on screen
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link =>
          link.classList.remove('active')
        );
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };

  // Attach the window listener once on load, remove it on unload
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar */}
          <nav id="navbar">
              <div className="nav-brand">
                  <span>Azad Jagtap</span>
              </div>
              <ul className="nav-menu">
                  <li><a href="#home" className="nav-link" onClick={handleNavClick}>Home</a></li>
                  <li><a href="#about" className="nav-link" onClick={handleNavClick}>About</a></li>
                  <li><a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a></li>
                  <li><a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a></li>
                  <li><a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a></li>
              </ul>
              {/* Mobile menu toggle (for bonus implementation) */}
              <div className="nav-toggle" onClick={handleMobileMenuToggle}>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </nav>

          {/* Hero Section */}
          <section id="home" className="hero">
              <div className="hero-content">
                  <h1 className="hero-title">Azad Jagtap</h1>
                  <p className="hero-subtitle">Graduate Student, UC Berkeley School of Information</p>
                  <p className="hero-tagline">Learning to build modern, responsive web experiences with HTML, CSS, and JavaScript</p>
                  <div className="hero-buttons">
                      <a href="#projects" className="btn btn-primary">View Projects</a>
                      <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                  </div>
              </div>
          </section>

          {/* About Section */}
          <section id="about" className="section">
              <div className="container">
                  <h2>About Me</h2>
                  <div className="about-grid">
                      <div className="about-text">
                          <p>I'm a graduate student at the UC Berkeley School of Information, currently taking INFO 253A: Front-End Web Architecture. I'm learning semantic HTML, modern CSS layouts with Flexbox and Grid, and JavaScript for the DOM.</p>
                          <div className="about-details">
                              <div className="detail-item">
                                  <span className="detail-icon">📍</span>
                                  <span>Berkeley, CA</span>
                              </div>
                              <div className="detail-item">
                                  <span className="detail-icon">✉️</span>
                                  <a href="mailto:azadjagtap@berkeley.edu">azadjagtap@berkeley.edu</a>
                              </div>
                              <div className="detail-item">
                                  <span className="detail-icon">📱</span>
                                  <span>(555) 123-4567</span>
                              </div>
                          </div>
                      </div>
                      <div className="about-availability">
                          <h3>Currently Available For:</h3>
                          <div className="availability-tags">
                              <span className="tag tag-available">Freelance</span>
                              <span className="tag tag-available">Full-Time</span>
                              <span className="tag tag-available">Remote</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section section-alt">
              <div className="container">
                  <h2>Skills & Technologies</h2>
                  <div className="skills-grid">
                      <div className="skill-card">
                          <div className="skill-header">
                              <span className="skill-icon">⚛️</span>
                              <h3 className="skill-name">React</h3>
                          </div>
                          <div className="skill-category">Frontend Framework</div>
                          <div className="skill-level">
                              <div className="skill-progress" style={{ '--skill-level': '90%' }}></div>
                          </div>
                          <span className="skill-percentage">90%</span>
                      </div>

                      <div className="skill-card">
                          <div className="skill-header">
                              <span className="skill-icon">🎨</span>
                              <h3 className="skill-name">CSS3</h3>
                          </div>
                          <div className="skill-category">Styling</div>
                          <div className="skill-level">
                              <div className="skill-progress" style={{ '--skill-level': '95%' }}></div>
                          </div>
                          <span className="skill-percentage">95%</span>
                      </div>

                      <div className="skill-card">
                          <div className="skill-header">
                              <span className="skill-icon">📱</span>
                              <h3 className="skill-name">Responsive Design</h3>
                          </div>
                          <div className="skill-category">Design</div>
                          <div className="skill-level">
                              <div className="skill-progress" style={{ '--skill-level': '88%' }}></div>
                          </div>
                          <span className="skill-percentage">88%</span>
                      </div>

                      <div className="skill-card">
                          <div className="skill-header">
                              <span className="skill-icon">🚀</span>
                              <h3 className="skill-name">JavaScript</h3>
                          </div>
                          <div className="skill-category">Programming</div>
                          <div className="skill-level">
                              <div className="skill-progress" style={{ '--skill-level': '85%' }}></div>
                          </div>
                          <span className="skill-percentage">85%</span>
                      </div>

                      <div className="skill-card">
                          <div className="skill-header">
                              <span className="skill-icon">🎯</span>
                              <h3 className="skill-name">Figma</h3>
                          </div>
                          <div className="skill-category">Design Tools</div>
                          <div className="skill-level">
                              <div className="skill-progress" style={{ '--skill-level': '80%' }}></div>
                          </div>
                          <span className="skill-percentage">80%</span>
                      </div>

                      <div className="skill-card">
                          <div className="skill-header">
                              <span className="skill-icon">🌐</span>
                              <h3 className="skill-name">Node.js</h3>
                          </div>
                          <div className="skill-category">Backend</div>
                          <div className="skill-level">
                              <div className="skill-progress" style={{ '--skill-level': '75%' }}></div>
                          </div>
                          <span className="skill-percentage">75%</span>
                      </div>
                  </div>
              </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
              <div className="container">
                  <h2>Featured Projects</h2>

                  {/* TODO: Add JavaScript to make these filter buttons interactive */}
                  <div className="filter-buttons">
                      <button className="filter-btn active" data-filter="all" onClick={handleFilterClick}>All Projects</button>
                      <button className="filter-btn" data-filter="frontend" onClick={handleFilterClick}>Frontend</button>
                      <button className="filter-btn" data-filter="fullstack" onClick={handleFilterClick}>Full-Stack</button>
                      <button className="filter-btn" data-filter="design" onClick={handleFilterClick}>Design</button>
                      <button className="filter-btn" data-filter="webapp" onClick={handleFilterClick}>Web App</button>
                  </div>

                  <div className="projects-grid">
                      {/* TODO: Add data-category attribute for filtering */}
                      <div className="project-card featured" data-category="fullstack">
                          <div className="project-image">
                              <img src="https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App" alt="E-Commerce Platform" />
                              <div className="project-overlay">
                                  <div className="project-links">
                                      <a href="#" className="project-link">
                                          <span>🔗</span> Live Demo
                                      </a>
                                      <a href="#" className="project-link">
                                          <span>💻</span> Code
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="project-content">
                              <div className="project-header">
                                  <h3 className="project-title">E-Commerce Platform</h3>
                                  <span className="project-category">Full-Stack</span>
                              </div>
                              <p className="project-description">A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.</p>
                              <div className="project-tags">
                                  <span className="project-tag">React</span>
                                  <span className="project-tag">Node.js</span>
                                  <span className="project-tag">MongoDB</span>
                                  <span className="project-tag">Stripe</span>
                              </div>
                          </div>
                      </div>

                      <div className="project-card" data-category="frontend">
                          <div className="project-image">
                              <img src="https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App" alt="Weather Dashboard" />
                              <div className="project-overlay">
                                  <div className="project-links">
                                      <a href="#" className="project-link">
                                          <span>🔗</span> Live Demo
                                      </a>
                                      <a href="#" className="project-link">
                                          <span>💻</span> Code
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="project-content">
                              <div className="project-header">
                                  <h3 className="project-title">Weather Dashboard</h3>
                                  <span className="project-category">Frontend</span>
                              </div>
                              <p className="project-description">Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.</p>
                              <div className="project-tags">
                                  <span className="project-tag">JavaScript</span>
                                  <span className="project-tag">CSS3</span>
                                  <span className="project-tag">API</span>
                              </div>
                          </div>
                      </div>

                      <div className="project-card" data-category="webapp">
                          <div className="project-image">
                              <img src="https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager" alt="Task Management App" />
                              <div className="project-overlay">
                                  <div className="project-links">
                                      <a href="#" className="project-link">
                                          <span>🔗</span> Live Demo
                                      </a>
                                      <a href="#" className="project-link">
                                          <span>💻</span> Code
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="project-content">
                              <div className="project-header">
                                  <h3 className="project-title">Task Management App</h3>
                                  <span className="project-category">Web App</span>
                              </div>
                              <p className="project-description">Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.</p>
                              <div className="project-tags">
                                  <span className="project-tag">React</span>
                                  <span className="project-tag">TypeScript</span>
                                  <span className="project-tag">Firebase</span>
                              </div>
                          </div>
                      </div>

                      <div className="project-card" data-category="design">
                          <div className="project-image">
                              <img src="https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site" alt="Portfolio Website" />
                              <div className="project-overlay">
                                  <div className="project-links">
                                      <a href="#" className="project-link">
                                          <span>🔗</span> Live Demo
                                      </a>
                                      <a href="#" className="project-link">
                                          <span>💻</span> Code
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="project-content">
                              <div className="project-header">
                                  <h3 className="project-title">Creative Portfolio</h3>
                                  <span className="project-category">Design</span>
                              </div>
                              <p className="project-description">Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.</p>
                              <div className="project-tags">
                                  <span className="project-tag">HTML5</span>
                                  <span className="project-tag">CSS3</span>
                                  <span className="project-tag">GSAP</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section section-alt">
              <div className="container">
                  <h2>Get In Touch</h2>
                  <div className="contact-content">
                      <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>

                      {/* TODO: Add JavaScript to validate this form in real-time */}
                      <form id="contact-form" className="contact-form" onSubmit={handleFormSubmit}>
                          <div className="form-grid">
                              <div className="form-group">
                                  <label htmlFor="name">Name *</label>
                                  <input type="text" id="name" name="name" onChange={validateName} required />
                                  {/* TODO: Add error message element here */}
                              </div>

                              <div className="form-group">
                                  <label htmlFor="email">Email *</label>
                                  <input type="email" id="email" name="email" onChange={validateEmail} required />
                                  {/* TODO: Add error message element here */}
                              </div>

                              <div className="form-group form-group-full">
                                  <label htmlFor="subject">Subject</label>
                                  <input type="text" id="subject" name="subject" />
                              </div>

                              <div className="form-group form-group-full">
                                  <label htmlFor="message">Message *</label>
                                  <textarea id="message" name="message" rows="5" onChange={validateMessage} required></textarea>
                                  {/* TODO: Add error message element here */}
                              </div>

                              <div className="form-group form-group-full">
                                  <button type="submit" className="btn btn-primary">Send Message</button>
                              </div>
                          </div>
                          {/* TODO: Add success message element here */}
                      </form>
                  </div>
              </div>
          </section>

          {/* Footer */}
          <footer className="footer">
              <div className="container">
                  <div className="footer-content">
                      <p>&copy; 2026 Azad Jagtap. All rights reserved.</p>
                      <div className="social-links">
                          <a href="https://github.com/jagtapazad" className="social-link">GitHub</a>
                          <a href="#" className="social-link">LinkedIn</a>
                          <a href="#" className="social-link">Twitter</a>
                          <a href="#" className="social-link">Dribbble</a>
                      </div>
                  </div>
              </div>
          </footer>

          {/* TODO: Create script.js file and add JavaScript functionality */}
    </>
  )
}

export default App
