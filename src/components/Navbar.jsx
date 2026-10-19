// State: is the mobile menu open? (a boolean)

import { useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Smooth scroll to the section the link names, then close the menu
  const handleNavClick = (e) => {
    e.preventDefault()
    const targetSection = document.querySelector(e.currentTarget.getAttribute('href'))
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav id="navbar">
      <div className="nav-brand">
        <span>Azad Jagtap</span>
      </div>

      {/* The className is rendered from state, not toggled on the DOM */}
      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link" onClick={handleNavClick}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
