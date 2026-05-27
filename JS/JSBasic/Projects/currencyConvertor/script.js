async function countryList() {
  const response = await fetch(`./codes.json`);

  const data = await response.json();

  const fromCountry = document.getElementById("fromCountry");
  const toCountry = document.getElementById("toCountry");

  // Adding options in select
  data.forEach((element) => {
    const fromOption = document.createElement("option");
    fromOption.value = `${element.currencyCode},${element.countryCode}`;
    fromOption.innerText = `${element.country}`;
    fromOption.selected = element.countryCode == "US";

    fromCountry.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = `${element.currencyCode},${element.countryCode}`;
    toOption.innerText = `${element.country}`;
    toOption.selected = element.countryCode == "IN";
    toCountry.appendChild(toOption);
  });
}

countryList();

// Change Flag when country is chaged
function flagChange(e) {
  if (e == "fromCountry") {
    const fromCountry = document.getElementById("fromCountry");
    const countryCode = fromCountry.value.split(",")[1];

    const flag = document.getElementById("fromFlag");
    flag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  } else {
    const toCountry = document.getElementById("toCountry");
    const countryCode = toCountry.value.split(",")[1];

    const flag = document.getElementById("toFlag");
    flag.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  }
}

document.getElementById("convertBtn").addEventListener("click", async () => {
  const fromCountry = document.getElementById("fromCountry");
  const toCountry = document.getElementById("toCountry");
  const fromCurrencyCode = fromCountry.value.split(",")[0].toLowerCase();
  const toCurrencyCode = toCountry.value.split(",")[0].toLowerCase();
  const amount = document.getElementById("amount").value;

  // Validation
  isValid = true;
  const amountError = document.getElementById("amountError");
  const fromError = document.getElementById("fromError");
  const toError = document.getElementById("toError");

  amountError.innerText = "";
  fromError.innerText = "";
  toError.innerText = "";

  if (amount <= 0 || amount == "") {
    amountError.innerText = "*Amount must be greater than zero";
    isValid = false;
  }

  if (fromCountry.value == "") {
    fromError.innerText = "*Please select a 'From' country";
    isValid = false;
  }

  if (toCountry.value == "") {
    toError.innerText = "*Please select a 'To' country";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrencyCode}.json`,
  );

  const data = await response.json();
  console.log(fromCurrencyCode);

  const rate = data[fromCurrencyCode][toCurrencyCode];
  console.log(rate);

  const resultCard = document.getElementById("resultCard");
  resultCard.classList.contains("d-none") &&
    resultCard.classList.remove("d-none");

  console.log(amount);

  document.getElementById("newAmount").innerText =
    `${(amount * rate).toFixed(2)} ${toCurrencyCode.toUpperCase()}`;
  document.getElementById("exchangeRate").innerText =
    `1 ${fromCurrencyCode.toUpperCase()} = ${rate.toFixed(2)} ${toCurrencyCode.toUpperCase()}`;
});

document.getElementById("swapBtn").addEventListener("click", () => {
  const fromCountry = document.getElementById("fromCountry");
  const temp = document.getElementById("fromCountry").value;
  const toCountry = document.getElementById("toCountry");
  const fromFlag = document.getElementById("fromFlag");
  const toFlag = document.getElementById("toFlag");




});
