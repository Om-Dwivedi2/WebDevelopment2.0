document.querySelector("button").addEventListener("click", () => {
  const bill = document.getElementById("bill").value;
  const service = document.getElementById("service").value;
  const people = document.getElementById("people").value;

  const tip = (bill / people) * (service / 100);
  console.log((bill / people) * (service / 100));

  document.getElementById("result").classList.remove("opacity-0");
  document.getElementById("amount").innerText = tip.toFixed(2) + "$";
});
