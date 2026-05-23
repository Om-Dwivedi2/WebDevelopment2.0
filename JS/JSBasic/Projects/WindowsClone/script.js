// Right Click functionality on screen

document.querySelector("main").addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const x = event.clientX;
  const y = event.clientY;

  const vpWidth = window.innerWidth;
  const vpHeight = window.innerHeight;

  const menu = document.getElementById("menu");

  console.log(`x:- ${x} and y:- ${y}`);

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");

    vpWidth / 2 <= x
      ? (menu.style.left = `${x - 300}px`)
      : (menu.style.left = `${x}px`);

    vpHeight / 2 <= y
      ? (menu.style.top = `${y - 0.4 * vpHeight}px`)
      : (menu.style.top = `${y}px`);

    return;
  }

  vpWidth / 2 <= x
    ? (menu.style.left = `${x - 300}px`)
    : (menu.style.left = `${x}px`);

  vpHeight / 2 <= y
    ? (menu.style.top = `${y - 0.47 * vpHeight}px`)
    : (menu.style.top = `${y}px`);
});

// Left Click functionality on screen
document.querySelector("main").addEventListener("click", (event) => {
  if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});

// Refresh Page
document.getElementById("refresh").addEventListener("click", () => {
  window.location.reload();
});

// Date
const dateTime = new Date();

const year = dateTime.getFullYear();
const month = dateTime.getMonth() + 1;
const day = dateTime.getDate();

const newDate = `${day}/${month}/${year}`;

document.getElementById("date").innerText = newDate;

// Time
setInterval(() => {
  const dateTime = new Date();
  let time = dateTime.toTimeString().split(" ")[0];
  document.getElementById("time").innerText = time;
}, 1000);

// weather

async function weather(city) {
  try {
    const apikey = "0d8d7097e15a1d2ec401314b070e3b75";
    const raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`,
    );

    if (!raw.ok) {
      throw new Error("Enter correct city name !!!");
    }

    const data = await raw.json();

    const temp = data.main.temp_max - 273.15;

    document.getElementById("temperature").innerText =
      Number(temp).toFixed(0) + "°C";

    document.getElementById("weather").innerText = data.weather[0].main;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

weather("bhopal");
