const display = document.querySelector("#text");
document.addEventListener("keydown", (e) => {
  let keyValue = e.key;

  if (keyValue == "Escape") {
    display.innerText = "0";
  }

  if (keyValue === "Backspace") {
    if (display.innerText === "0") {
      return;
    }
    display.innerText = display.innerText.slice(0, -1);
  }

  if (
    (keyValue >= "0" && keyValue <= "9") ||
    keyValue === "/" ||
    keyValue === "*" ||
    keyValue === "-" ||
    keyValue === "+" ||
    keyValue === "."
  ) {
    if (display.innerText === "0") {
      display.innerText = keyValue;
      return;
    }

    display.innerText = display.innerText + keyValue;
  }

  try {
    if (keyValue === "Enter") {
      display.innerText = eval(display.innerText);
    }
  } catch (error) {
    alert("Given Expression cannot be calculated");
    window.location.reload();
  }
});

function calculate(e) {
  console.log(e);
  if (e === "AC") {
    display.innerText = "0";
    return;
  }

  if (e === "C") {
    if (display.innerText === "0") {
      return;
    }

    display.innerText = display.innerText.slice(0, -1);
    return;
  }

  if (display.innerText === "0") {
    display.innerText = e;
    return;
  }

  try {
    if (e === "=") {
      display.innerText = eval(display.innerText);
      return;
    }
  } catch (error) {
    alert("Given Expression cannot be calculated");
    window.location.reload();
  }

  display.innerText = display.innerText + e;
}
