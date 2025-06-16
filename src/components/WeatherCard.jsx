import React from 'react'

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null

  const getWeatherIcon = (condition) => {
    const iconMap = {
      'clear sky': '☀️',
      'few clouds': '🌤️',
      'scattered clouds': '⛅',
      'broken clouds': '☁️',
      'overcast clouds': '☁️',
      'shower rain': '🌦️',
      'rain': '🌧️',
      'thunderstorm': '⛈️',
      'snow': '🌨️',
      'mist': '🌫️',
      'fog': '🌫️',
      'haze': '🌫️'
    }

    const description = condition.toLowerCase()
    return iconMap[description] || '🌤️'
  }

  const formatTemperature = (temp) => {
    return Math.round(temp)
  }

  return (
    <div className="weather-container">
      <div className="weather-info">
        <div className="weather-main">
          <div className="weather-icon">
            {getWeatherIcon(weatherData.weather[0].description)}
          </div>
          <div className="temperature">
            {formatTemperature(weatherData.main.temp)}°C
          </div>
        </div>

        <div className="weather-description">
          {weatherData.weather[0].description}
        </div>

        <h2 style={{ marginBottom: '1rem', color: '#2d3436' }}>
          📍 {weatherData.name}, {weatherData.sys.country}
        </h2>

        <div className="weather-details">
          <div className="weather-detail">
            <div className="weather-detail-label">Feels Like</div>
            <div className="weather-detail-value">
              {formatTemperature(weatherData.main.feels_like)}°C
            </div>
          </div>

          <div className="weather-detail">
            <div className="weather-detail-label">Humidity</div>
            <div className="weather-detail-value">
              {weatherData.main.humidity}%
            </div>
          </div>

          <div className="weather-detail">
            <div className="weather-detail-label">Wind Speed</div>
            <div className="weather-detail-value">
              {weatherData.wind.speed} m/s
            </div>
          </div>

          <div className="weather-detail">
            <div className="weather-detail-label">Pressure</div>
            <div className="weather-detail-value">
              {weatherData.main.pressure} hPa
            </div>
          </div>

          <div className="weather-detail">
            <div className="weather-detail-label">Visibility</div>
            <div className="weather-detail-value">
              {weatherData.visibility ? (weatherData.visibility / 1000).toFixed(1) : 'N/A'} km
            </div>
          </div>

          <div className="weather-detail">
            <div className="weather-detail-label">UV Index</div>
            <div className="weather-detail-value">
              N/A
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
