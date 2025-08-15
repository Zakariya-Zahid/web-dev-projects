document.addEventListener("DOMContentLoaded", () => {
  let inputCity = document.getElementById("city-input");
  let getWeatherButton = document.getElementById("get-weather-btn");
  let WeatherInfo = document.getElementById("weather-info");
  let CityName = document.getElementById("city-name");
  let Temperature = document.getElementById("temperature");
  let Description = document.getElementById("description");
  let ErrorMessage = document.getElementById("error-message");
  let WeatherImage = document.getElementById("weather-img");
  const weatherImages = {
    "clear sky": "images/clearsky.png",
    "few clouds": "images/clouds.png",
    "broken clouds": "images/clouds.png",
    rain: "images/rain.png",
    "light rain": "images/rain.png",
    snow: "images/snow.png",
    mist: "images/mist.png",
    thunderstorm: "images/thunderstorm.png",
    haze: "images/haze.png",
    "overcast clouds": "images/overcastclouds.png",
  };

  getWeatherButton.addEventListener("click", async () => {
    let city = inputCity.value.trim();
    if (!city) return;
    try {
      let weatherData = await FetchWeatherData(city);
      DisplayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function FetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found!");
    }
    let data = await response.json();
    console.log(data);
    return data;
  }

  function DisplayWeatherData(data) {
    ErrorMessage.classList.add("hidden");
    WeatherInfo.classList.remove("hidden");

    CityName.textContent = data.name;
    Temperature.textContent = `Temperature: ${data.main.temp}°C`;
    Description.textContent = `Weather: ${data.weather[0].description}`;

    // Get the weather description in lowercase
    let weatherType = data.weather[0].description.toLowerCase();
    let imageSrc = weatherImages[weatherType];

    if (imageSrc) {
      WeatherImage.src = imageSrc;
      WeatherImage.classList.remove("hidden");
    } else {
      WeatherImage.classList.add("hidden"); // hide if no image found
    }
  }

  function showError() {
    WeatherInfo.classList.add("hidden");
    ErrorMessage.classList.remove("hidden");
  }
});
