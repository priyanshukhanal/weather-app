# Weather App

A modern, responsive weather application built with React, Vite, and JavaScript. Get real-time weather information for cities worldwide with a beautiful, user-friendly interface.

## 🌟 Features

- **Real-time Weather Data**: Current weather conditions for cities worldwide
- **Location Selection**: Choose from popular cities or use your current location
- **Detailed Weather Information**: Temperature, humidity, wind speed, pressure, and more
- **User Preferences**: Selected city is saved automatically using localStorage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with weather icons and animations
- **Navigation**: Multi-page application with Home, About, and Contact pages

## 🛠️ Technology Stack

- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **React Router**: Declarative routing for React applications
- **Local Storage**: Browser storage for user preferences
- **Weather API**: Integration with weather data services
- **CSS3**: Modern styling with flexbox and grid layouts

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Extract the project files**
   ```bash
   unzip weather-app.zip
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔧 Configuration

### Weather API Setup

The application currently uses mock data for demonstration purposes. To use real weather data:

1. **Sign up for a free API key** at [OpenWeatherMap](https://openweathermap.org/api)

2. **Update the API configuration** in `src/services/weatherService.js`:
   ```javascript
   const API_KEY = 'your_api_key_here'
   ```

3. **Uncomment the real API code** and comment out the mock data sections in the same file

## 📱 Usage

### Home Page
- Select a city from the dropdown menu
- Click "Use Current Location" to get weather for your current position
- View detailed weather information including temperature, humidity, wind speed, and more
- Your selected city preference is automatically saved

### About Page
- Learn about the application features and technology stack
- Understand the mission and goals of the Weather App

### Contact Page
- Send messages using the contact form
- View contact information and business hours
- Form submissions are handled locally (integrate with a backend service for production use)

## 🎨 Customization

### Adding New Cities
Edit the `cities` array in `src/pages/Home.jsx`:
```javascript
const cities = [
  'London',
  'New York',
  'Tokyo',
  'Sydney',
  'Paris',
  'Your City' // Add your city here
]
```

### Styling
- Main styles are in `src/App.css`
- Global styles are in `src/index.css`
- Components use inline styles for specific customizations

### Weather Icons
Weather icons are emoji-based and can be customized in the `WeatherCard` component's `getWeatherIcon` function.

## 📦 Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── WeatherCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please visit the Contact page in the application or reach out through the provided contact information.

---

Built with ❤️ using React and Vite
