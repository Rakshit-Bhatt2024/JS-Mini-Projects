# Weather App

A simple weather application that fetches current weather data for any city.

## Setup Instructions

### 1. Get an API Key
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your dashboard and copy your API key

### 2. Configure the API Key
1. Copy `config.template.js` to `config.js`
2. Open `config.js` in your text editor
3. Replace `"YOUR_OPENWEATHER_API_KEY_HERE"` with your actual API key
4. Save the file

### 3. Run the Application
Simply open `index.html` in your web browser.

## Security Note
- Never commit your `config.js` file to version control
- The `config.js` file is already added to `.gitignore`
- For production deployments, consider using server-side API calls to keep your key completely hidden

## Features
- Search weather by city name
- Display current temperature, humidity, and wind speed
- Dynamic weather icons based on conditions
- Error handling for invalid city names

## Files Structure
- `index.html` - Main application file
- `style.css` - Styling for the application
- `config.template.js` - Template for API configuration
- `config.js` - Your actual API configuration (not tracked by git)
- `images/` - Weather icons and UI images
