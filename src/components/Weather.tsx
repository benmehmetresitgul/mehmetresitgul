import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye, Loader } from 'lucide-react';

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  visibility: number;
}

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = '755623e152e47efe86bfd4e85d8f9856';
  const LAT = 40.08;
  const LON = 39.38;

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      setLoading(true);

      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=tr`
      );
      const currentData = await currentResponse.json();

      if (!currentResponse.ok) {
        throw new Error(`Weather API error: ${currentData.message}`);
      }

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=tr`
      );
      const forecastData = await forecastResponse.json();

      if (!forecastResponse.ok) {
        throw new Error(`Forecast API error: ${forecastData.message}`);
      }

      setWeather(currentData);

      const dailyForecast = forecastData.list.filter((_: any, index: number) => index % 8 === 0).slice(0, 5);
      setForecast(dailyForecast);

      setLoading(false);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError('Hava durumu yüklenemedi');
      setLoading(false);
    }
  };

  const getWeatherIcon = (iconCode: string) => {
    if (iconCode.includes('01')) return <Sun className="w-16 h-16 text-yellow-400" />;
    if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) 
      return <Cloud className="w-16 h-16 text-gray-400" />;
    if (iconCode.includes('09') || iconCode.includes('10') || iconCode.includes('11')) 
      return <CloudRain className="w-16 h-16 text-blue-400" />;
    return <Sun className="w-16 h-16 text-yellow-400" />;
  };

  const getSmallWeatherIcon = (iconCode: string) => {
    if (iconCode.includes('01')) return <Sun className="w-10 h-10 text-yellow-500" />;
    if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) 
      return <Cloud className="w-10 h-10 text-gray-500" />;
    if (iconCode.includes('09') || iconCode.includes('10') || iconCode.includes('11')) 
      return <CloudRain className="w-10 h-10 text-blue-500" />;
    return <Sun className="w-10 h-10 text-yellow-500" />;
  };

  const getDayName = (timestamp: number) => {
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const date = new Date(timestamp * 1000);
    return days[date.getDay()];
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center p-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl">
            <Loader className="w-12 h-12 text-white animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !weather) {
    return (
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Hava Durumu
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-stone-600 text-lg">Hava durumu verisi yüklenemedi.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Hava Durumu
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Ana Hava Durumu Kartı */}
          <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden mb-8">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div>
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">Mahmatlı</h3>
                  <p className="text-blue-100 text-lg md:text-xl">Kelkit, Gümüşhane</p>
                </div>
                <div className="text-center md:text-right mt-4 md:mt-0">
                  <p className="text-white text-sm opacity-90">
                    {new Date().toLocaleDateString('tr-TR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                <div className="flex items-center space-x-6">
                  {getWeatherIcon(weather.weather[0].icon)}
                  <div>
                    <div className="text-white text-6xl md:text-7xl font-bold">
                      {Math.round(weather.main.temp)}°
                    </div>
                    <p className="text-blue-100 text-xl mt-2 capitalize">
                      {weather.weather[0].description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 text-white">
                  <div className="flex items-center space-x-3">
                    <Wind className="w-6 h-6 text-blue-200" />
                    <div>
                      <p className="text-blue-200 text-sm">Rüzgar</p>
                      <p className="font-semibold">{Math.round(weather.wind.speed * 3.6)} km/s</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-6 h-6 text-blue-200" />
                    <div>
                      <p className="text-blue-200 text-sm">Nem</p>
                      <p className="font-semibold">{weather.main.humidity}%</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="w-6 h-6 text-blue-200" />
                    <div>
                      <p className="text-blue-200 text-sm">Görüş</p>
                      <p className="font-semibold">{(weather.visibility / 1000).toFixed(1)} km</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center text-blue-200 text-xl">🌡️</div>
                    <div>
                      <p className="text-blue-200 text-sm">Hissedilen</p>
                      <p className="font-semibold">{Math.round(weather.main.feels_like)}°</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Günlük Tahmin */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">5 Günlük Tahmin</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {forecast.map((day, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 text-center hover:shadow-lg transition-all hover:scale-105"
                >
                  <p className="font-semibold text-stone-700 mb-3">
                    {index === 0 ? 'Bugün' : getDayName(day.dt)}
                  </p>
                  <div className="flex justify-center mb-3">
                    {getSmallWeatherIcon(day.weather[0].icon)}
                  </div>
                  <p className="text-2xl font-bold text-stone-800 mb-1">
                    {Math.round(day.main.temp)}°
                  </p>
                  <p className="text-sm text-stone-600 capitalize">
                    {day.weather[0].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;