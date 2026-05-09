document.getElementById("redBox").addEventListener("mouseover", fillRedColor);
document.getElementById("redBox").addEventListener("mouseout", fillBaseColor);

document
  .getElementById("greenBox")
  .addEventListener("mouseover", fillGreenColor);

document.getElementById("greenBox").addEventListener("mouseout", fillBaseColor);

document.getElementById("blueBox").addEventListener("mouseover", fillBlueColor);
document.getElementById("blueBox").addEventListener("mouseout", fillBaseColor);

function fillRedColor() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}

function fillBlueColor() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}

function fillGreenColor() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

function fillBaseColor() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
