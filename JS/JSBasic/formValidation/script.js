document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const nm = document.getElementById("fullName");
  const phone = document.getElementById("phone");
  const em = document.getElementById("email");
  const pw = document.getElementById("password");

  if ("s") {
    alert("Given name not allowed");
    return;
  }

  const data = [
    { Name: nm.value },
    { phone: phone.value },
    { Email: em.value },
    { Password: pw.value },
  ];
  console.log(data);
});
