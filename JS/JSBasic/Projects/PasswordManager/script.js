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

  validate(packet);

  const oldData = JSON.parse(localStorage.getItem("PasswordManager")) || [];

  oldData.push(packet);

  localStorage.setItem("PasswordManager", JSON.stringify(oldData));
});

document.querySelector("form").addEventListener("reset", (element) => {
  element.preventDefault();

  const websiteName = (document.getElementById("websiteName").value = "");
  const userName = (document.getElementById("userName").value = "");
  const password = (document.getElementById("password").value = "");
});

function validate(packet) {
  document.querySelectorAll(".error").forEach((element) => {});

  if (!packet.websiteName) {
    document.getElementById("websiteNameError").innerText =
      "*Please enter Website Name";
  }

  if (!packet.userName) {
    document.getElementById("userNameError").innerText =
      "*Please enter userName";
  }

  if (!packet.password) {
    document.getElementById("passwordError").innerText =
      "*Please enter Password";
  }
}
