// Using a free weather API - OpenWeatherMap
// Note: You'll need to sign up for a free API key at openweathermap.org
// For demo purposes, we'll include a mock API that works without a key

const API_KEY = 'c214cfdee1ee2b9947ca42b77db20a62' // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

// Mock weather data for demo purposes
const mockWeatherData = {
  'London': {
    name: 'London',
    sys: { country: 'GB' },
    main: {
      temp: 15,
      feels_like: 13,
      humidity: 72,
      pressure: 1013
    },
    weather: [{ description: 'few clouds' }],
    wind: { speed: 3.5 },
    visibility: 10000
  },
  'New York': {
    name: 'New York',
    sys: { country: 'US' },
    main: {
      temp: 22,
      feels_like: 25,
      humidity: 65,
      pressure: 1015
    },
    weather: [{ description: 'clear sky' }],
    wind: { speed: 2.1 },
    visibility: 12000
  },
  'Tokyo': {
    name: 'Tokyo',
    sys: { country: 'JP' },
    main: {
      temp: 18,
      feels_like: 19,
      humidity: 78,
      pressure: 1018
    },
    weather: [{ description: 'scattered clouds' }],
    wind: { speed: 1.8 },
    visibility: 8000
  },
  'Sydney': {
    name: 'Sydney',
    sys: { country: 'AU' },
    main: {
      temp: 25,
      feels_like: 24,
      humidity: 60,
      pressure: 1020
    },
    weather: [{ description: 'clear sky' }],
    wind: { speed: 4.2 },
    visibility: 15000
  },
  'Paris': {
    name: 'Paris',
    sys: { country: 'FR' },
    main: {
      temp: 12,
      feels_like: 10,
      humidity: 80,
      pressure: 1010
    },
    weather: [{ description: 'rain' }],
    wind: { speed: 2.8 },
    visibility: 6000
  }
}

export const getWeatherByCity = async (cityName) => {
  try {
    // For demo purposes, return mock data
    if (mockWeatherData[cityName]) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      return mockWeatherData[cityName]
    }

    // If you have a real API key, uncomment the code below and comment out the mock data return
    /*
    const response = await fetch(
      `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    )

    if (!response.ok) {
      throw new Error(`Weather data not found for ${cityName}`)
    }

    const data = await response.json()
    return data
    */

    // Fallback for unknown cities
    throw new Error(`Weather data not found for ${cityName}`)
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}

export const getCurrentLocationWeather = async () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords

          // For demo purposes, return London weather for any location
          await new Promise(resolve => setTimeout(resolve, 500))
          resolve(mockWeatherData['London'])

          // If you have a real API key, use this instead:
          /*
          const response = await fetch(
            `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          )

          if (!response.ok) {
            throw new Error('Failed to fetch weather data for current location')
          }

          const data = await response.json()
          resolve(data)
          */
        } catch (error) {
          reject(error)
        }
      },
      (error) => {
        reject(new Error('Unable to retrieve your location'))
      }
    )
  })
}
