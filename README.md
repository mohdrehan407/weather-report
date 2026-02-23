# 🌤️ Professional Weather Application

A modern, professional weather application built with React (Vite) featuring real-time weather data from WeatherStack API with a stunning glassmorphism design.

## ✨ Features

- **Real-time Weather Data**: Fetch current weather information for any city worldwide
- **Comprehensive Weather Details**:
  - City Name & Country
  - Temperature (°C)
  - Weather Description & Icon
  - Feels Like Temperature
  - Humidity
  - Wind Speed & Direction
  - Visibility
  - Atmospheric Pressure
  - Local Time
- **JSON Data Viewer**: Toggle to view complete API response in formatted JSON
- **Modern Glassmorphism UI**: Premium design with blurred glass effects
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Error Handling**: Clear error messages for API failures or invalid cities
- **Loading States**: Smooth loading indicators during data fetch

## 🎨 Design Features

- Glassmorphism design with backdrop blur effects
- Animated gradient background with floating orbs
- Smooth hover animations and transitions
- Premium typography using Inter font
- Responsive grid layouts
- Soft shadows and subtle borders
- Clean, modern interface

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── WeatherCard.jsx       # Main weather display component
 │    ├── WeatherCard.css
 │    ├── SearchBar.jsx         # City search input component
 │    ├── SearchBar.css
 │    ├── JsonViewer.jsx        # JSON data toggle viewer
 │    └── JsonViewer.css
 ├── App.jsx                    # Main application component
 ├── App.css                    # Main application styles
 ├── main.jsx                   # Application entry point
 └── index.css                  # Global styles
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- WeatherStack API key (free at https://weatherstack.com/)

### Installation Steps

1. **Navigate to the project directory**:
   ```bash
   cd "c:\Users\MOHD REHAN\Desktop\wheather"
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Configure API Key**:
   - Open `src/App.jsx`
   - Find line 8: `const API_KEY = 'YOUR_API_KEY_HERE';`
   - Replace `YOUR_API_KEY_HERE` with your actual WeatherStack API key

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   - Navigate to `http://localhost:5173/`
   - The application should now be running!

## 🔑 Getting Your API Key

1. Visit [WeatherStack](https://weatherstack.com/)
2. Sign up for a free account
3. Copy your API access key from the dashboard
4. Paste it into `src/App.jsx` as described above

## 💻 Usage

1. Enter a city name in the search input field
2. Click "Get Current Weather" button
3. View the detailed weather information displayed
4. Click "View JSON Data" to see the raw API response
5. Click "Hide JSON Data" to collapse the JSON viewer

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **WeatherStack API** - Weather data provider
- **CSS3** - Styling with glassmorphism effects
- **Google Fonts** - Inter font family

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚠️ Error Handling

The application handles various error scenarios:
- Invalid city names
- API errors
- Network failures
- Missing API responses

All errors are displayed with clear, user-friendly messages.

## 🎯 Code Quality

- Functional React components
- React Hooks (useState, useEffect)
- Clean, readable code structure
- Proper error handling
- Loading state management
- No placeholders or pseudo code
- Production-ready implementation

## 🌐 API Information

**Base URL**: `http://api.weatherstack.com/current`

**Request Format**:
```
http://api.weatherstack.com/current?access_key=YOUR_KEY&query=CITY_NAME
```

**Note**: WeatherStack free tier uses HTTP by default. HTTPS is available on paid plans.

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Support

For issues or questions:
- Check the WeatherStack API documentation
- Review the error messages in the application
- Ensure your API key is valid and has remaining requests

---

**Developed with ❤️ using React + Vite**
