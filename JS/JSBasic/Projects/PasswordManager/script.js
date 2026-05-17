document.querySelector("form").addEventListener("submit", (element) => {
  element.preventDefault();
  const websiteName = document.getElementById("websiteName").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  const packet = {
    websiteName: websiteName,
    userName: userName,
    password: password,
  };

  if (!validate(packet)) {
    alert("Fill All Data");
    return;
  }

  const oldData = JSON.parse(localStorage.getItem("PasswordManager")) || [];

  oldData.push(packet);

  localStorage.setItem("PasswordManager", JSON.stringify(oldData));

  document.getElementById("save").classList.add("isDisabled");
});

document.querySelector("form").addEventListener("reset", (element) => {
  element.preventDefault();

  const websiteName = (document.getElementById("websiteName").value = "");
  const userName = (document.getElementById("userName").value = "");
  const password = (document.getElementById("password").value = "");

  document.getElementById("save").classList.remove("isDisabled");
});

function validate(packet) {
  let isValid = true;

  document.querySelectorAll(".error").forEach((element) => {
    element.innerText = "";
  });

  if (!packet.websiteName) {
    document.getElementById("websiteNameError").innerText =
      "*Please enter Website Name";
    isValid = false;
  }

  if (!packet.userName) {
    document.getElementById("userNameError").innerText =
      "*Please enter userName";
    isValid = false;
  }

  if (!packet.password) {
    document.getElementById("passwordError").innerText =
      "*Please enter Password";
    isValid = false;
  }

  return isValid;
}

let toggle = "eyeClose";

document.getElementById("eye").addEventListener("click", (element) => {
  if (toggle == "eyeClose") {
    element.target.classList.add("bi-eye-fill");
    element.target.classList.remove("bi-eye-slash-fill");
    document.getElementById("password").type = "password";
    toggle = "eyeOpen";
  } else {
    element.target.classList.remove("bi-eye-fill");
    element.target.classList.add("bi-eye-slash-fill");
    document.getElementById("password").type = "text";
    toggle = "eyeClose";
  }
});
