import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>

      <div className="page-content">
        <div style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>
          📧
        </div>

        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, 
          feel free to reach out to us using the form below.
        </p>

        {submitted ? (
          <div style={{
            background: 'rgba(46, 204, 113, 0.1)',
            border: '2px solid #2ecc71',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            color: '#27ae60',
            marginTop: '2rem'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3>Thank you for your message!</h3>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form action="https://formspree.io/f/mqabbrgj" method= "POST" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us what's on your mind..."
                rows="5"
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message 📤
            </button>
          </form>
        )}

        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          background: 'rgba(116, 185, 255, 0.1)', 
          borderRadius: '10px' 
        }}>
          <h3 style={{ color: '#2d3436', marginBottom: '1rem' }}>
            💡 Other Ways to Reach Us
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <strong>📍 Address:</strong><br />
              Ghorahi, Dang<br />

            </div>

            <div>
              <strong>📞 Phone:</strong><br />
              9812870444<br />
      
            </div>

            <div>
              <strong>✉️ Email:</strong><br />
              priyanshukhanal25@gmail.com<br />
              support@weatherapp.com
            </div>

            <div>
              <strong>🕒 Hours:</strong><br />
              Mon-Fri: 10:00 AM - 6:00 PM<br />
              Weekend: 10:00 AM - 4:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
