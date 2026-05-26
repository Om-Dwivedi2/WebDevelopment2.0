const API_KEY = "0d8d7097e15a1d2ec401314b070e3b75";

async function getWeather() {
  const city = document.getElementById("city").value.trim();

  try {
    const { latitude, longitude } = await getCordinates(city);

    const rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
    );
    const data = await rawData.json();

    // Weather Image
    document.getElementById("weatherImg").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Temperature
    document.getElementById("temp").innerHTML =
      ` ${(data.main.temp - 273.15).toFixed(0)}°C`;

    const date = new Date();
    const dayNum = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const dayArr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = dayArr[dayNum];

    document.getElementById("time").innerText = `${day}, ${hour}:${minute}`;

    document.getElementById("weather").innerText =
      `${data.weather[0].description}`;

    document.getElementById("clouds").innerText = `Clouds - ${data.clouds.all}`;

    // City Photo
    document.getElementById("cityPhoto").src = await cityPhotoes(city);

    document.getElementById("country").innerText = `${city}`;

    document.getElementById("pressure").innerText = `${data.main.pressure}`;
    document.getElementById("wind").innerText = `${data.wind.speed}`;
    document.getElementById("windDeg").innerText = `${data.wind.deg}°`;

    // Converting into UTC to sunrise time

    const sunrise = data.sys.sunrise;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
    });

    document.getElementById("sunRise").innerText = `${sunriseTime}`;

    // Converting into UTC to sunset time
    const sunset = data.sys.sunset;
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
    });

    document.getElementById("sunSet").innerText = `${sunsetTime}`;

    // Humidity
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;

    data.main.humidity < 30
      ? (document.getElementById("humidityCondition").innerText = `Normal 👍`)
      : (document.getElementById("humidityCondition").innerText = `High 👎`);

    // Visibility
    document.getElementById("visibility").innerText =
      `${data.visibility / 1000}`;

    // Sea Level
    document.getElementById("seaLevel").innerText = `${data.main.sea_level}`;
  } catch (error) {
    console.log(error);
  }
}

async function getCordinates(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`,
    );
    const data = await response.json();

    if (data.length == 0) {
      throw new Error("Enter valid City name!!!");
    }

    const latitude = data[0].lat;
    const longitude = data[0].lon;
    return { latitude, longitude };
  } catch (error) {
    console.log(error);
  }
}

async function cityPhotoes(city) {
  const API_KEY = `Z2ESgG8txFd3BoEPLokP229hMoznC6yBrtHjYCbEkH56tNNK298P0URH`;

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${city} Tourist Places&per_page=1`,
      {
        headers: {
          Authorization: API_KEY,
        },
      },
    );

    const data = await response.json();

    const photo = data.photos[0].src.original;

    return photo;
  } catch (error) {
    console.log(error);
  }
}
