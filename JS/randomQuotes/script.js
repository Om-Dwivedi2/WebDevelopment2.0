const main = document.querySelector("main");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let element = document.createElement("div");

  let xCordinate = Math.floor(Math.random() * 100);
  let yCordinate = Math.floor(Math.random() * 100);

  let rotate = Math.floor(Math.random() * 360);


  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);




  element.style.position = "absolute";
  element.style.left = xCordinate + "%";
  element.style.top = yCordinate + "%";
  element.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  element.style.width = "50px";
  element.style.height = "50px";
  element.style.transform = `rotate(${rotate}deg)`
  
  main.appendChild(element);
});
