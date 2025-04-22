import { memo } from "react";
import type { WeatherData } from "../types/weather";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = memo(({ weather }: WeatherCardProps) => {
  return (
    <div className="weather-info mt-8 bg-white/10 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-100">
        {weather.name}
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition duration-300">
          <p className="text-5xl font-bold text-blue-100">
            {Math.round(weather.main.temp)}°C
          </p>
          <p className="text-blue-200 mt-2">Temperature</p>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition duration-300">
          <p className="text-5xl font-bold text-blue-100">
            {weather.main.humidity}%
          </p>
          <p className="text-blue-200 mt-2">Humidity</p>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition duration-300">
          <p className="text-5xl font-bold text-blue-100">
            {weather.wind.speed} m/s
          </p>
          <p className="text-blue-200 mt-2">Wind Speed</p>
        </div>
        <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition duration-300">
          <p className="text-5xl font-bold text-blue-100">
            {Math.round(weather.main.feels_like)}°C
          </p>
          <p className="text-blue-200 mt-2">Feels Like</p>
        </div>
      </div>
      <div className="text-center mt-6 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
        <p className="text-2xl capitalize text-blue-100">
          {weather.weather[0].description}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={`Weather icon for ${weather.weather[0].description}`}
          className="mx-auto transform scale-150 my-4"
          loading="lazy"
        />
      </div>
    </div>
  );
});

WeatherCard.displayName = "WeatherCard";

export default WeatherCard;
