document.getElementById("calculate").addEventListener("click", () => {
  const distance = document.getElementById("distance").value;
  console.log(distance);

  if (distance == "") {
    document.getElementById("validation").classList.remove("d-none");
    document.getElementById("validation").innerText = "*Enter some value";
  } else if (distance < 0) {
    document.getElementById("validation").classList.remove("d-none");
    document.getElementById("validation").innerText =
      "*Enter a non-negative number of KM";
  } else if (distance >= 0) {
    document.getElementById("validation").classList.add("d-none");
    document.getElementById("result").classList.remove("d-none");
    document.getElementById("result").innerHTML =
      `<div class="d-flex justify-content-between">
          <span>Total distance covered:</span>
          <span>${distance + " KM"}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>First 10KM:</span>
          <span>₹ ${distance <= 10 ? distance * 11 : 110}</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>After 10KM:</span>
          <span>₹ ${distance <= 10 ? 0 : ((distance - 10) * 10).toLocaleString("en-IN")}</span>
        </div>

        <div class="text-center fw-semibold mt-3">Total Bill = ₹ ${distance <= 10 ? distance * 11 : (110 + (distance - 10) * 10).toLocaleString("en-IN")}</div>`;
  }
});
