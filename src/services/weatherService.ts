import axios, { AxiosError } from "axios";
import { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = import.meta.env.VITE_WEATHER_API_URL;

// Validate environment variables
if (!API_KEY || !API_URL) {
  throw new Error(
    "Missing required environment variables. Please check your .env file."
  );
}

// Create axios instance with default config
const weatherApi = axios.create({
  baseURL: API_URL,
  params: {
    appid: API_KEY,
    units: "metric",
  },
});

export const getWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await weatherApi.get("", {
      params: { q: city },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error(
          `City "${city}" not found. Please check the spelling and try again.`
        );
      }
      if (error.response?.status === 401) {
        throw new Error("Invalid API key. Please check your configuration.");
      }
      throw new Error(
        error.response?.data?.message || "Failed to fetch weather data"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};
