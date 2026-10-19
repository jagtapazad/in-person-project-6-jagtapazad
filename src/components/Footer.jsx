// Presentational: receives the project count from App as a prop

function Footer({ projectCount }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 Azad Jagtap. All rights reserved.</p>
          <p>{projectCount} projects</p>
          <div className="social-links">
            <a href="https://github.com/jagtapazad" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
