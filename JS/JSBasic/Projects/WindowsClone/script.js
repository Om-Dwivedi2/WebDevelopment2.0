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
    ? (menu.style.top = `${y - 0.4 * vpHeight}px`)
    : (menu.style.top = `${y}px`);
});
