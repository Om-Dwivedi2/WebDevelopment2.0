let arr = [
  {
    team: "CSK",
    primaryColor: "orange",
    secondaryColor: "yellow",
    captain: "Mahendra Singh Dhoni",
    logo: "./asserts/cskLogo.png",
  },

   {
    team: "Gujarat Titans",
    primaryColor: "dark blue",
    secondaryColor: "gold",
    captain: "Shubman Gill",
    logo: "./asserts/gtLogo.avif",
  },
  {
    team: "Mumbai Indians",
    primaryColor: "blue",
    secondaryColor: "gold",
    captain: "Hardik Pandya",
    logo: "./asserts/miLogo.png",
  },
  {
    team: "Royal Challengers Bangalore",
    primaryColor: "red",
    secondaryColor: "blue",
    captain: "Virat Kohli",
    logo: "./asserts/rcbLogo.jpg",
  }

];

let logo = document.querySelector("img");
let primaryColor = document.querySelector("main");
let secondaryColor = document.querySelector("div");
let team = document.querySelector("h1");
let captain = document.querySelector("h3");

let btn = document.querySelector("button");

btn.addEventListener('click', function () {
   let number = Math.floor(Math.random() * arr.length);
   primaryColor.style.backgroundColor = arr[number].primaryColor;
   secondaryColor.style.backgroundColor = arr[number].secondaryColor;
   team.innerText = `${arr[number].team}`;
   captain.innerText = `${arr[number].captain}`;
   logo.src = arr[number].logo;
});