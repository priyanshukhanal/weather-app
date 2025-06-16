import React, { useState, useEffect } from 'react'
import WeatherCard from '../components/WeatherCard'
import { getWeatherByCity, getCurrentLocationWeather } from '../services/weatherService'
import { saveSelectedCity, getSelectedCity } from '../utils/localStorage'

const Home = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCity, setSelectedCity] = useState('')

  const cities = [
    'London',
    'New York',
    'Tokyo',
    'Sydney',
    'Paris'
  ]

  useEffect(() => {
    // Load saved city preference or default to London
    const savedCity = getSelectedCity('London')
    setSelectedCity(savedCity)
    fetchWeatherData(savedCity)
  }, [])

  const fetchWeatherData = async (cityName) => {
    setLoading(true)
    setError(null)

    try {
      const data = await getWeatherByCity(cityName)
      setWeatherData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCityChange = async (event) => {
    const newCity = event.target.value
    setSelectedCity(newCity)
    saveSelectedCity(newCity)
    await fetchWeatherData(newCity)
  }

  const handleCurrentLocation = async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await getCurrentLocationWeather()
      setWeatherData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="page-container">
        <h1 className="page-title">Weather Dashboard</h1>

        <div className="location-selector">
          <label htmlFor="city-select" style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: 'bold',
            color: '#2d3436'
          }}>
            Select a city:
          </label>
          <select 
            id="city-select"
            value={selectedCity} 
            onChange={handleCityChange}
          >
            {cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <button 
            onClick={handleCurrentLocation}
            style={{
              marginLeft: '1rem',
              padding: '12px 20px',
              background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            📍 Use Current Location
          </button>
        </div>

        {loading && (
          <div className="loading">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌀</div>
            Loading weather data...
          </div>
        )}

        {error && (
          <div className="error">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>❌</div>
            {error}
          </div>
        )}

        {!loading && !error && weatherData && (
          <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  )
}

export default Home
