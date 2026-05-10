const form = document.querySelector("form");
const btn = document.querySelector("button");
const DOB = document.querySelector("#DOB");
const currDate = document.querySelector("#currentDate");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  console.log(DOB.value);
  

  const year =
    Number(currDate.value.split("-")[0]) - Number(DOB.value.split("-")[0]);

const month = Number(currDate.value.split("-")[1]) - Number(DOB.value.split("-")[1]);
const date = Number(currDate.value.split("-")[2]) - Number(DOB.value.split("-")[2]);


  console.log(age);

  document.querySelector("#Age").innerText = age +" Year";
});
