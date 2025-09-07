import React, { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [forecastData, setForcastData] = useState("");
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const API_KEY = "YOUR_API_KEY";

  const formatTimeIntl = (unix, timezone) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    }).format(new Date((unix + timezone) * 1000));
  };
  const fetchWeather = async () => {
    try {
      setLoading(true); // show loader
      if (!city) return;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // hide loader
    }
  };
  const forcastWeather = async () => {
    if (!city) return;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
    );
    const data = await res.json();
    console.log(data);
    const dailyForecast = data.list
      .filter((item) => item.dt_txt.includes("12:00:00"))
      .slice(0, 5);

    setForcastData(dailyForecast);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-[#111] backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-center">
          <h1 className="text-lg text-white font-semibold tracking-tight">Weatherly</h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 space-y-6">
        {/* Search */}
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
            className="flex-1 rounded-2xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            onClick={() => {
              fetchWeather();
              forcastWeather();
            }}
            className="rounded-2xl border px-4 py-3 text-sm hover:bg-slate-50"
          >
            Search
          </button>
        </div>

        {/* Current Weather Card */}
        <main className="mx-auto max-w-3xl px-4 py-8 space-y-6">
          {loading ? (
            // Loader
            <div className="flex flex-col items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
              <p className="mt-2 text-slate-600">Loading...</p>
            </div>
          ) : weatherData ? (
            <>
              {/* Current Weather Card */}
              <section className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-sky-200 text-3xl">
                      <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt={weatherData.weather[0].description}
                        className="mx-auto w-12 h-12"
                      />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">
                        Updated just now
                      </div>
                      <h2 className="text-2xl font-semibold leading-tight">
                        {weatherData.name}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {new Date().toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="text-5xl font-bold tracking-tight">
                      {weatherData.main.temp}°{unit === "metric" ? "C" : "F"}
                    </div>
                    <div className="text-slate-500">
                      <div className="text-sm">
                        {weatherData.weather[0].main}
                      </div>
                      <div className="text-xs">
                        Feels like {weatherData.main.feels_like}°
                        {unit === "metric" ? "C" : "F"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                  <div className="rounded-xl border p-3">
                    <div className="text-slate-500">Humidity</div>
                    <div className="mt-1 text-lg font-semibold">
                      {weatherData.main.humidity}%
                    </div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-slate-500">Wind</div>
                    <div className="mt-1 text-lg font-semibold">
                      {weatherData.wind.speed} km/h
                    </div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-slate-500">Sea Level</div>
                    <div className="mt-1 text-lg font-semibold">
                      {weatherData.main.sea_level || "N/A"}
                    </div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-slate-500">Pressure</div>
                    <div className="mt-1 text-lg font-semibold">
                      {weatherData.main.pressure} hPa
                    </div>
                  </div>
                </div>
              </section>

              {/* Forecast */}
              {forecastData && (
                <section className="rounded-2xl border bg-white p-4 shadow-sm">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    5-Day Forecast
                  </h3>
                  <div className="grid grid-cols-5 gap-2">
                    {forecastData.map((day, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 p-2 rounded-lg text-center"
                      >
                        <p className="text-sm font-medium">
                          {new Date(day.dt_txt).toLocaleDateString("en-US", {
                            weekday: "short",
                          })}
                        </p>
                        <div className="bg-blue-200 rounded-2xl">
                          <img
                            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt={day.weather[0].description}
                            className="mx-auto w-12 h-12"
                          />
                        </div>
                        <p className="text-lg font-bold">
                          {Math.round(day.main.temp)}°
                          {unit === "metric" ? "C" : "F"}
                        </p>
                        <p className="text-xs text-slate-500">
                          {day.weather[0].main}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Extras */}
              <section className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div className="rounded-xl border p-3">
                    <div className="text-slate-500">Sunrise</div>
                    <div className="mt-1 font-semibold">
                      {formatTimeIntl(
                        weatherData.sys.sunrise,
                        weatherData.timezone
                      )}
                    </div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-slate-500">Sunset</div>
                    <div className="mt-1 font-semibold">
                      {formatTimeIntl(
                        weatherData.sys.sunset,
                        weatherData.timezone
                      )}
                    </div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-slate-500">Visibility</div>
                    <div className="mt-1 font-semibold">
                      {weatherData.visibility / 1000} km
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <p className="text-center text-slate-500">No data yet</p>
          )}
        </main>
      </main>

      <footer className="border-t bg-white/60">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center text-sm text-slate-500">
          Weatherly • Zakariya Bukhari • © 2025
        </div>
      </footer>
    </div>
  );
};

export default App;
