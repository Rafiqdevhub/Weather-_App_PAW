import { useState, useCallback, memo } from "react";
import { WeatherData } from "./types/weather";
import { getWeather } from "./services/weatherService";
import WeatherCard from "./components/WeatherCard";
import ErrorBoundary from "./components/ErrorBoundary";

// Memoized search form component
const SearchForm = memo(
  ({
    onSubmit,
    loading,
  }: {
    onSubmit: (city: string) => void;
    loading: boolean;
  }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (city.trim()) {
        onSubmit(city.trim());
      }
    };

    return (
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-white/60"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !city.trim()}
            className="px-6 py-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-600/80 focus:outline-none disabled:bg-blue-300/50 disabled:cursor-not-allowed transition duration-300 ease-in-out transform hover:scale-105"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin"></div>
                <span>Searching...</span>
              </div>
            ) : (
              "Search"
            )}
          </button>
        </div>
      </form>
    );
  }
);

SearchForm.displayName = "SearchForm";

const App = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-blue-900 py-6 flex flex-col justify-center sm:py-12 relative overflow-hidden">
        {/* Rain effect */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="animate-rain absolute w-0.5 h-10 bg-blue-200/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative py-3 sm:max-w-xl sm:mx-auto z-10">
          <div className="relative px-4 py-10 bg-white/10 backdrop-blur-lg shadow-lg sm:rounded-3xl sm:p-20 border border-white/20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200/20">
                <div className="py-8 text-base leading-6 space-y-4 text-white sm:text-lg sm:leading-7">
                  <h1 className="text-4xl font-bold text-center mb-8 text-blue-100">
                    Weather App
                  </h1>

                  <SearchForm onSubmit={handleSearch} loading={loading} />

                  {error && (
                    <div className="text-red-300 text-center bg-red-500/10 py-4 px-6 rounded-lg border border-red-500/20 backdrop-blur-sm animate-fade-in">
                      <svg
                        className="w-8 h-8 mx-auto mb-2 text-red-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <p className="font-medium">{error}</p>
                    </div>
                  )}

                  {!weather && !error && !loading && (
                    <div className="text-center py-8 animate-fade-in">
                      <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                        <svg
                          className="w-16 h-16 mx-auto mb-4 text-blue-300/80"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 9.003 8.354-5.646z"
                          />
                        </svg>
                        <h3 className="text-xl font-semibold text-blue-100 mb-2">
                          No Weather Data
                        </h3>
                        <p className="text-blue-200/80">
                          Enter a city name above to see the current weather
                          conditions
                        </p>
                      </div>
                    </div>
                  )}

                  {weather && <WeatherCard weather={weather} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
