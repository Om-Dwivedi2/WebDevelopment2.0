function calculate(e) {
  console.log(e);

  let keyValue;
  const display = document.getElementById("text");
  document.addEventListener("keydown", (e)=>{
    keyValue = e.key;
    console.log(keyValue);
    
  })

  if (keyValue === "Escape") {
    display.innerText = "0";
    return;
  }

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

  if (e === "=") {
    display.innerText = eval(display.innerText);
    return;
  }

  display.innerText = display.innerText + e;

  // const expression = document.getElementById("text").value;

  // console.log(expression);
}
