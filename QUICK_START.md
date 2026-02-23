# 🚀 Quick Start Guide - Weather Application

## Installation Steps

### Step 1: Open Terminal
Open PowerShell or Command Prompt in the project directory:
```bash
cd "c:\Users\MOHD REHAN\Desktop\wheather"
```

### Step 2: Install Dependencies (if not already done)
```bash
npm install
```

### Step 3: Configure Your API Key
1. Get your FREE API key from: https://weatherstack.com/
2. Sign up for a free account
3. Copy your access key
4. Open `src/App.jsx` in your code editor
5. Find line 8:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
6. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'abc123def456';  // Your actual key
   ```

### Step 4: Run the Application
```bash
npm run dev
```

### Step 5: Open in Browser
Navigate to: **http://localhost:5173/**

---

## 🎯 Quick Test

Once the app is running:

1. **Enter a city name** (e.g., "London", "New York", "Tokyo")
2. **Click "Get Current Weather"**
3. **View the weather details** displayed in the beautiful glassmorphism card
4. **Click "View JSON Data"** to see the raw API response
5. **Try different cities** to see real-time weather updates!

---

## ✅ What You Should See

### Welcome Screen
- Beautiful animated gradient background with floating orbs
- "Weather Application" title with animated icon
- Search bar with glassmorphism effect
- Welcome message with feature list

### After Searching
- Weather card with:
  - City name and country
  - Large temperature display
  - Weather icon and description
  - Detailed weather metrics (humidity, wind, pressure, etc.)
  - All in a beautiful glass card design

### JSON Viewer
- Toggle button to show/hide raw data
- Formatted JSON response from the API
- Copy button to copy JSON to clipboard

---

## 🎨 Design Features You'll Notice

✨ **Glassmorphism Effects**
- Blurred glass backgrounds
- Semi-transparent cards
- Subtle borders and shadows

🌈 **Animated Gradient Background**
- Three floating orbs
- Smooth color transitions
- Purple/pink gradient theme

💫 **Smooth Animations**
- Slide-up effects for cards
- Hover animations on buttons
- Loading spinner during fetch
- Bounce animation on title icon

📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Adaptive layouts
- Touch-friendly buttons

---

## ⚙️ Project Files Created

### Components
- ✅ `src/components/SearchBar.jsx` - City search input
- ✅ `src/components/SearchBar.css` - Search bar styles
- ✅ `src/components/WeatherCard.jsx` - Weather display
- ✅ `src/components/WeatherCard.css` - Weather card styles
- ✅ `src/components/JsonViewer.jsx` - JSON toggle viewer
- ✅ `src/components/JsonViewer.css` - JSON viewer styles

### Main Files
- ✅ `src/App.jsx` - Main application logic
- ✅ `src/App.css` - Main application styles
- ✅ `src/index.css` - Global styles
- ✅ `README.md` - Complete documentation

---

## 🔧 Commands Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🐛 Troubleshooting

### "City not found" error
- Check spelling of city name
- Try using full city name
- Try adding country (e.g., "Paris, France")

### API Error
- Verify your API key is correct
- Check if you have remaining API requests (free tier limit)
- Ensure you're using HTTP (not HTTPS) for free tier

### Port already in use
- Kill the process using port 5173
- Or Vite will automatically use the next available port

---

## 📝 Notes

- **API Key Required**: The app won't work without a valid WeatherStack API key
- **HTTP Only**: Free tier uses HTTP (HTTPS requires paid plan)
- **Request Limits**: Free tier has monthly request limits
- **No Backend**: This is a frontend-only application

---

## 🎓 Code Quality Features

✅ Functional React components
✅ useState and useEffect hooks
✅ Proper error handling
✅ Loading states
✅ Form validation
✅ Clean code structure
✅ No placeholders
✅ Production-ready

---

**Ready to test? Run `npm run dev` and open http://localhost:5173/ in your browser!**
