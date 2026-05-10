

document.getElementById("calculate").addEventListener("click", () => {
  const units = document.getElementById("units").value;
  if (units < 0) {
    alert("Electricity Unit should not be negative");
    window.location.reload();
  } else if (units <= 50) {
    const result = document.getElementById("result");
    result.classList.remove("d-none");
    result.innerHTML = `<div class="d-flex justify-content-between">
          <span>First 50 units:</span>
          <span>${units * 0.5}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Next 150 units:</span>
          <span>0</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Next 250 units:</span>
          <span>0</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Above 450 units:</span>
          <span>0</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Subtotal</span>
          <span>${units * 0.5}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Surcharge</span>
          <span>${(units * 0.5 * 0.2).toFixed(2)}</span>
        </div>

         <div class="d-flex justify-content-between">
          <span>Total</span>
          <span>${(units * 0.5 + units * 0.5 * 0.2).toFixed(2)}</span>
        </div>
`;
  } else if (units > 50 && units <= 200) {
    const result = document.getElementById("result");
    result.classList.remove("d-none");
    result.innerHTML = `<div class="d-flex justify-content-between">
          <span>First 50 units:</span>
          <span>${25}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Next 150 units:</span>
          <span>${((units - 50) * 0.75).toFixed(2)}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Next 250 units:</span>
          <span>0</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Above 450 units:</span>
          <span>0</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Subtotal</span>
          <span>${(25 + (units - 50) * 0.75).toFixed(2)}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Surcharge</span>
          <span>${((25 + (units - 50) * 0.75) * 0.2).toFixed(2)}</span>
        </div>

         <div class="d-flex justify-content-between">
          <span>Total</span>
          <span>${(25 + (units - 50) * 0.75 + (25 + (units - 50) * 0.75) * 0.2).toFixed(2)}</span>
        </div>
`;
  } else if (units > 200 && units <= 450) {
    const result = document.getElementById("result");
    result.classList.remove("d-none");
    result.innerHTML = `<div class="d-flex justify-content-between">
          <span>First 50 units:</span>
          <span>${25}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Next 150 units:</span>
          <span>${112.5}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Next 250 units:</span>
          <span>${((units - 200) * 1.2).toFixed(2)}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Above 450 units:</span>
          <span>0</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Subtotal</span>
          <span>${(137.5 + (units - 200) * 1.2).toFixed(2)}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Surcharge</span>
          <span>${((137.5 + (units - 200) * 1.2) * 0.2).toFixed(2)}</span>
        </div>

         <div class="d-flex justify-content-between">
          <span>Total</span>
          <span>${(137.5 + (units - 200) * 1.2 + (137.5 + (units - 200) * 1.2) * 0.2).toFixed(2)}</span>
        </div>
`;
  } else {
    const result = document.getElementById("result");
    result.classList.remove("d-none");
    result.innerHTML = `<div class="d-flex justify-content-between">
          <span>First 50 units:</span>
          <span>${25}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Next 150 units:</span>
          <span>${112.5}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Next 250 units:</span>
          <span>${300}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Above 450 units:</span>
          <span>${((units - 450) * 1.5).toFixed(2)}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Subtotal</span>
          <span>${(437.5 + (units - 450) * 1.5).toFixed(2)}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Surcharge</span>
          <span>${((437.5 + (units - 450) * 1.5) * 0.2).toFixed(2)}</span>
        </div>

         <div class="d-flex justify-content-between">
          <span>Total</span>
          <span>${(437.5 + (units - 450) * 1.5 + (437.5 + (units - 450) * 1.5) * 0.2).toFixed(2)}</span>
        </div>
`;
  }
});


document.getElementById("clear").addEventListener("click" , ()=>{
    window.location.reload();
});