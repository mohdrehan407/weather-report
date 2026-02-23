import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import JsonViewer from './components/JsonViewer';
import './App.css';

// API KEY CONFIGURED
const API_KEY = 'd8a352360130566d18eddf1960061f7b';
const API_URL = 'https://api.weatherstack.com/current';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `${API_URL}?access_key=${API_KEY}&query=${encodeURIComponent(city)}`
      );

      const data = await response.json();

      // Check for API errors
      if (data.error) {
        throw new Error(data.error.info || 'Failed to fetch weather data');
      }

      // Check if location was found
      if (!data.location) {
        throw new Error('City not found. Please check the city name and try again.');
      }

      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching weather data');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="gradient-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <header className="app-header">
          <h1 className="app-title">
            <span className="title-icon">🌤️</span>
            Weather Application
          </h1>
          <p className="app-subtitle">Get real-time weather information for any city</p>
        </header>

        <main className="app-content">
          <SearchBar onSearch={fetchWeather} loading={loading} />

          {error && (
            <div className="error-card">
              <div className="error-icon">⚠️</div>
              <div className="error-content">
                <h3>Error</h3>
                <p>{error}</p>
              </div>
            </div>
          )}

          {weatherData && !error && (
            <>
              <WeatherCard weatherData={weatherData} />
              <JsonViewer data={weatherData} />
            </>
          )}

          {!weatherData && !loading && !error && (
            <div className="welcome-card">
              <div className="welcome-icon">🌍</div>
              <h2>Welcome to Weather App</h2>
              <p>Enter a city name above to get started</p>
              <div className="features-list">
                <div className="feature-item">
                  <span>📍</span>
                  <span>Real-time weather data</span>
                </div>
                <div className="feature-item">
                  <span>🌡️</span>
                  <span>Temperature & feels like</span>
                </div>
                <div className="feature-item">
                  <span>💨</span>
                  <span>Wind speed & direction</span>
                </div>
                <div className="feature-item">
                  <span>💧</span>
                  <span>Humidity & pressure</span>
                </div>
              </div>
            </div>
          )}
        </main>

        <footer className="app-footer">
          <p>Powered by WeatherStack API</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
