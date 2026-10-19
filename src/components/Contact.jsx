// State: what has the user typed, and which fields have errors? (two objects)

import { useState } from 'react'

// Returns an error message, or an empty string when the field is fine
function validateField(name, value) {
  const trimmed = value.trim()

  if (name === 'name') {
    return trimmed ? '' : 'Name is required'
  }
  if (name === 'email') {
    if (!trimmed) return 'Email is required'
    return trimmed.includes('@') ? '' : 'Please enter a valid email address'
  }
  if (name === 'message') {
    if (!trimmed) return 'Message is required'
    return trimmed.length >= 10 ? '' : 'Message must be at least 10 characters'
  }
  return ''
}

const emptyForm = { name: '', email: '', message: '' }

function Contact() {
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // One handler for all three inputs, keyed by the input's name attribute
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Typing in a field that has an error clears that error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // Validate only the field the user just left
  const handleBlur = (e) => {
    const { name, value } = e.target
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(emptyForm).forEach((field) => {
      const message = validateField(field, formData[field])
      if (message) newErrors[field] = message
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setFormData(emptyForm)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always interested in hearing about new opportunities and projects. Feel free to
            reach out!
          </p>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="form-group form-group-full">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>

            {isSubmitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
