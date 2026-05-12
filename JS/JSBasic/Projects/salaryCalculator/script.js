document.getElementById("calculate").addEventListener("click", () => {
  const salary = document.getElementById("salary").value;

  if (salary == "") {
    document.getElementById("validation").classList.remove("d-none");
    document.getElementById("validation").innerText =
      "*Please Enter the salary";
  } else if (salary < 0) {
    document.getElementById("validation").classList.remove("d-none");
    document.getElementById("validation").innerText =
      "*Enter a non-negative number";
  } else {
    document.getElementById("validation").classList.add("d-none");
    document.getElementById("result").classList.remove("d-none");
    document.getElementById("result").innerHTML =
      `<div class="d-flex justify-content-between">
          <span>Basic Salary:</span>
          <span>₹ ${salary.toLocaleString('en-IN')}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>HRA:</span>
          <span>₹ ${(salary*0.3).toLocaleString('en-IN')}</span>
        </div>

         <div class="d-flex justify-content-between">
          <span>DA:</span>
          <span>₹ ${(salary*0.7).toLocaleString('en-IN')}</span>
        </div>

         <div class="d-flex justify-content-between">
          <span>Gross Salary:</span>
          <span>₹ ${(salary*2).toLocaleString('en-IN')}</span>
        </div>`;
  }
});


document.getElementById("clear").addEventListener("click", () => {

  window.location.reload();


});