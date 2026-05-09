let count = 0;
const btn = document.querySelector("button");
const loader = document.querySelector(".loading");
const percent = document.querySelector("h1");

btn.addEventListener("click", () => {
  const int = setInterval(() => {
    count++;
    console.log(count);

    loader.style.width = count + "%";
    percent.innerHTML = count + "%";
  }, 50);

  setTimeout(() => {
    clearInterval(int);
  }, 5000);
});
