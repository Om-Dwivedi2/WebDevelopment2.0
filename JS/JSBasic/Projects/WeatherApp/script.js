const API_KEY = "0d8d7097e15a1d2ec401314b070e3b75";

async function getWeather() {
  const city = document.getElementById("city").value.trim();

  try {
    const { latitude, longitude } = await getCordinates(city);

    const rawData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
    );
    const data = await rawData.json();

    document.getElementById("cityDiv").innerHTML =
      `${city} <sup id="countryDiv" class="bg-warning rounded-4 text-white text-center px-2">${data.sys.country}</sup>`;

    document.getElementById("temp").innerHTML =
      ` ${(data.main.temp - 273.15).toFixed(2)} ° <sup>C</sup>`;

    document.getElementById("weatherImg").src =
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weather").innerText =
      `${data.weather[0].description}`;
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
