// Utility functions for handling localStorage operations

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

export const getItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return defaultValue
  }
}

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error('Error removing from localStorage:', error)
  }
}

// Specific functions for weather app preferences
export const saveSelectedCity = (cityName) => {
  setItem('selectedCity', cityName)
}

export const getSelectedCity = (defaultCity = 'London') => {
  return getItem('selectedCity', defaultCity)
}

export const saveUserPreferences = (preferences) => {
  setItem('userPreferences', preferences)
}

export const getUserPreferences = () => {
  return getItem('userPreferences', {
    selectedCity: 'London',
    temperatureUnit: 'celsius',
    theme: 'light'
  })
}
