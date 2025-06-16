import React from 'react'

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About WeatherApp</h1>

      <div className="page-content">
        <div style={{ textAlign: 'center', fontSize: '4rem', marginBottom: '2rem' }}>
          🌤️
        </div>

        <p style={{ marginBottom: '1.5rem' }}>
          Welcome to WeatherApp, your reliable companion for staying informed about weather conditions 
          around the world. Our application provides real-time weather information with a clean, 
          user-friendly interface that makes checking the weather a delightful experience.
        </p>

        <h2 style={{ color: '#2d3436', marginBottom: '1rem', marginTop: '2rem' }}>
          🌟 Features
        </h2>

        <ul style={{ marginBottom: '2rem', lineHeight: '2' }}>
          <li><strong>Real-time Weather Data:</strong> Get current weather conditions for cities worldwide</li>
          <li><strong>Location Selection:</strong> Choose from popular cities or use your current location</li>
          <li><strong>Detailed Information:</strong> View temperature, humidity, wind speed, pressure, and more</li>
          <li><strong>User Preferences:</strong> Your selected city is saved automatically for future visits</li>
          <li><strong>Responsive Design:</strong> Optimized for desktop, tablet, and mobile devices</li>
          <li><strong>Visual Weather Icons:</strong> Easy-to-understand weather condition indicators</li>
        </ul>

        <h2 style={{ color: '#2d3436', marginBottom: '1rem' }}>
          🛠️ Technology Stack
        </h2>

        <ul style={{ marginBottom: '2rem', lineHeight: '2' }}>
          <li><strong>React:</strong> Modern JavaScript library for building user interfaces</li>
          <li><strong>Vite:</strong> Fast build tool and development server</li>
          <li><strong>React Router:</strong> Declarative routing for React applications</li>
          <li><strong>Local Storage:</strong> Browser storage for user preferences</li>
          <li><strong>Weather API:</strong> Third-party service for accurate weather data</li>
        </ul>

        <h2 style={{ color: '#2d3436', marginBottom: '1rem' }}>
          🎯 Our Mission
        </h2>

        <p style={{ marginBottom: '1.5rem' }}>
          We believe that weather information should be accessible, accurate, and beautifully presented. 
          Our goal is to provide you with all the weather details you need in a format that's easy to 
          understand and pleasant to use.
        </p>

        <div style={{ 
          background: 'rgba(116, 185, 255, 0.1)', 
          padding: '1.5rem', 
          borderRadius: '10px',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#2d3436' }}>
            "Stay informed, stay prepared, stay comfortable with WeatherApp!"
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
