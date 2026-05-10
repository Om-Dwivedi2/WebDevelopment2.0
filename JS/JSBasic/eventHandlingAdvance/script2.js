document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const dataPacket = { fullname: fullName, email: email, password: password };

  console.log(dataPacket);

  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", (e) => {
  e.preventDefault();
  let result = confirm("are you Sure ?");

  if (result) {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    console.log("Data cleared");
  } else {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Action cancelled");
  }
});

document.addEventListener("keydown", (e) => {
  

  
  if (e.key == 'Escape') {
   let result = confirm("are you Sure ?");
   if (result) {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    console.log("Data cleared");
  } else {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Action cancelled");
  }
  }
});
