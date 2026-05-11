document.getElementById("calculate").addEventListener("click", () => {
  const salary = document.getElementById("salary").value;

  if (salary == "") {
    document.getElementById("validation").classList.remove("d-none");
    document.getElementById("validation").innerText =
      "*Please Enter the salary";
  }
  else if (salary < 0) {
    document.getElementById("validation").classList.remove("d-none");
    document.getElementById("validation").innerText =
      "*Enter a non-negative number";
  }
});
