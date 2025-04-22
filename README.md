# Weather PWA

A modern, responsive Progressive Web Application built with React and TypeScript that displays real-time weather information. The application features a sleek UI with animated rain effects and smooth transitions.

## Features

- Real-time weather data fetching using OpenWeather API
- Responsive design with a glass-morphism UI theme
- Animated rain effects and smooth transitions
- Error handling and loading states
- PWA-ready structure
- TypeScript for enhanced type safety
- Built with Vite for optimal performance

## Tech Stack

- React 19
- TypeScript
- Vite 6
- TailwindCSS
- Axios for API calls

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- OpenWeather API key

### Installation

1. Clone the repository:

```bash
git clone
cd weather_pwa
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your OpenWeather API credentials:

```env
VITE_WEATHER_API_KEY="your_api_key_here"
VITE_WEATHER_API_URL="https://api.openweathermap.org/data/2.5/weather"
```

### Development

To start the development server:

```bash
npm run dev
```

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── ErrorBoundary.tsx  # Global error handling
│   └── WeatherCard.tsx    # Weather information display
├── services/            # API services
│   └── weatherService.ts  # Weather API integration
├── types/              # TypeScript type definitions
│   └── weather.ts      # Weather-related types
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Features

### Weather Information

- Current temperature
- Feels like temperature
- Humidity levels
- Wind speed
- Weather description with icons
- City name display

### UI/UX

- Animated rain effect background
- Loading spinners for API calls
- Error handling with user-friendly messages
- Responsive design for all screen sizes
- Glass-morphism design elements
- Smooth fade-in animations

### Error Handling

- City not found errors
- API key validation
- Network error handling
- Global error boundary for crash prevention

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenWeather API for weather data
- TailwindCSS for styling
- React team for the amazing framework
- Vite team for the build tooling
