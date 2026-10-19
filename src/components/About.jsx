// Presentational: no state

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a graduate student at the UC Berkeley School of Information, currently taking
              INFO 253A: Front-End Web Architecture. I'm learning semantic HTML, modern CSS
              layouts with Flexbox and Grid, and JavaScript for the DOM.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>Berkeley, CA</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">✉️</span>
                <a href="mailto:azadjagtap@berkeley.edu">azadjagtap@berkeley.edu</a>
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
  )
}

export default About
