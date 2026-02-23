import './WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
    const {
        location,
        current
    } = weatherData;

    // Calculate weather quality score
    const getAirQualityIndex = () => {
        const humidity = current.humidity;
        const visibility = current.visibility;

        if (humidity < 40 && visibility > 8) return { label: 'Excellent', color: '#10b981', score: 95 };
        if (humidity < 60 && visibility > 5) return { label: 'Good', color: '#3b82f6', score: 75 };
        if (humidity < 80 && visibility > 3) return { label: 'Moderate', color: '#f59e0b', score: 55 };
        return { label: 'Poor', color: '#ef4444', score: 35 };
    };

    const airQuality = getAirQualityIndex();

    // Get UV index level (simulated based on time)
    const getUVLevel = () => {
        const hour = new Date(location.localtime).getHours();
        if (hour >= 10 && hour <= 16) return { level: 'High', color: '#ef4444', value: 8 };
        if (hour >= 8 && hour <= 18) return { level: 'Moderate', color: '#f59e0b', value: 5 };
        return { level: 'Low', color: '#10b981', value: 2 };
    };

    const uvData = getUVLevel();

    return (
        <div className="weather-card">
            {/* Top Status Bar */}
            <div className="status-bar">
                <div className="status-item">
                    <span className="status-dot status-live"></span>
                    <span>Live Data</span>
                </div>
                <div className="status-item">
                    <span className="status-label">Last Updated:</span>
                    <span className="status-value">{new Date().toLocaleTimeString()}</span>
                </div>
            </div>

            {/* Main Header */}
            <div className="weather-header">
                <div className="location-info">
                    <div className="location-badge">
                        <span className="location-pin">📍</span>
                        <span className="location-region">{location.region || location.country}</span>
                    </div>
                    <h1 className="city-name">{location.name}</h1>
                    <p className="country-name">{location.country}</p>
                    <div className="datetime-wrapper">
                        <span className="icon-clock">🕐</span>
                        <p className="local-time">{location.localtime}</p>
                    </div>
                </div>
                <div className="weather-icon-container">
                    {current.weather_icons && current.weather_icons[0] && (
                        <img
                            src={current.weather_icons[0]}
                            alt={current.weather_descriptions[0]}
                            className="weather-icon-large"
                        />
                    )}
                    <div className="weather-code">CODE: {current.weather_code || 'N/A'}</div>
                </div>
            </div>

            {/* Temperature Section */}
            <div className="temperature-section">
                <div className="temp-display">
                    <div className="main-temp">
                        <span className="temp-value">{current.temperature}</span>
                        <span className="temp-unit">°C</span>
                    </div>
                    <div className="temp-meta">
                        <p className="weather-description">{current.weather_descriptions[0]}</p>
                        <div className="feels-like-compact">
                            Feels like <strong>{current.feelslike}°C</strong>
                        </div>
                    </div>
                </div>

                {/* Temperature Gauge */}
                <div className="temp-gauge">
                    <div className="gauge-bar">
                        <div
                            className="gauge-fill"
                            style={{ width: `${Math.min((current.temperature + 20) / 80 * 100, 100)}%` }}
                        ></div>
                    </div>
                    <div className="gauge-labels">
                        <span>-20°C</span>
                        <span>60°C</span>
                    </div>
                </div>
            </div>

            {/* Weather Metrics Grid */}
            <div className="metrics-grid">
                <div className="metric-card metric-primary">
                    <div className="metric-header">
                        <span className="metric-icon">💧</span>
                        <span className="metric-label">Humidity</span>
                    </div>
                    <div className="metric-value">{current.humidity}<span className="metric-unit">%</span></div>
                    <div className="metric-bar">
                        <div className="metric-bar-fill" style={{ width: `${current.humidity}%`, background: '#3b82f6' }}></div>
                    </div>
                </div>

                <div className="metric-card metric-primary">
                    <div className="metric-header">
                        <span className="metric-icon">💨</span>
                        <span className="metric-label">Wind Speed</span>
                    </div>
                    <div className="metric-value">{current.wind_speed}<span className="metric-unit">km/h</span></div>
                    <div className="metric-bar">
                        <div className="metric-bar-fill" style={{ width: `${Math.min(current.wind_speed / 100 * 100, 100)}%`, background: '#10b981' }}></div>
                    </div>
                </div>

                <div className="metric-card">
                    <div className="metric-header">
                        <span className="metric-icon">🧭</span>
                        <span className="metric-label">Direction</span>
                    </div>
                    <div className="metric-value compass-value">{current.wind_dir}</div>
                    <div className="metric-detail">{current.wind_degree}°</div>
                </div>

                <div className="metric-card">
                    <div className="metric-header">
                        <span className="metric-icon">🌍</span>
                        <span className="metric-label">Pressure</span>
                    </div>
                    <div className="metric-value">{current.pressure}<span className="metric-unit">mb</span></div>
                    <div className="metric-detail">{(current.pressure * 0.02953).toFixed(2)} inHg</div>
                </div>

                <div className="metric-card">
                    <div className="metric-header">
                        <span className="metric-icon">👁️</span>
                        <span className="metric-label">Visibility</span>
                    </div>
                    <div className="metric-value">{current.visibility}<span className="metric-unit">km</span></div>
                    <div className="metric-detail">{(current.visibility * 0.621371).toFixed(1)} mi</div>
                </div>

                <div className="metric-card">
                    <div className="metric-header">
                        <span className="metric-icon">☀️</span>
                        <span className="metric-label">UV Index</span>
                    </div>
                    <div className="metric-value" style={{ color: uvData.color }}>{current.uv_index || uvData.value}</div>
                    <div className="metric-detail">{uvData.level}</div>
                </div>

                <div className="metric-card">
                    <div className="metric-header">
                        <span className="metric-icon">☁️</span>
                        <span className="metric-label">Cloud Cover</span>
                    </div>
                    <div className="metric-value">{current.cloudcover}<span className="metric-unit">%</span></div>
                    <div className="metric-bar">
                        <div className="metric-bar-fill" style={{ width: `${current.cloudcover}%`, background: '#6b7280' }}></div>
                    </div>
                </div>

                <div className="metric-card metric-highlight">
                    <div className="metric-header">
                        <span className="metric-icon">🎯</span>
                        <span className="metric-label">Air Quality</span>
                    </div>
                    <div className="metric-value" style={{ color: airQuality.color }}>{airQuality.score}</div>
                    <div className="metric-detail">{airQuality.label}</div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="additional-info">
                <div className="info-badge">
                    <span className="info-label">Precipitation:</span>
                    <span className="info-value">{current.precip} mm</span>
                </div>
                <div className="info-badge">
                    <span className="info-label">Is Day:</span>
                    <span className="info-value">{current.is_day === 'yes' ? '☀️ Day' : '🌙 Night'}</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
