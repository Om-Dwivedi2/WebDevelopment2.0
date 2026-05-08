const bgColor = document.getElementById("bgColor");
const headingColor = document.getElementById("headingColor");
const paraColor = document.getElementById("paraColor");

const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");
const section1 = document.querySelector("#section1");

bgColor.addEventListener("change", () => {
  section1.style.backgroundColor = bgColor.value;
});

headingColor.addEventListener("change", () => {
  heading.style.color = headingColor.value;
});

paraColor.addEventListener("change", () => {
  paragraph.style.color = paraColor.value;
});

const reload = document.getElementById("reload");

reload.addEventListener("click", () => {
    window.location.reload();
});
