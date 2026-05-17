function viewSavedPassword() {
  const oldData = JSON.parse(localStorage.getItem("PasswordManager")) || [];
  const tbody = document.querySelector("tbody");
  if (oldData.length === 0) {
    tbody.innerHTML = `<tr>
              <td colspan="4">No Data to Show</td>
            </tr>`;
    return;
  }

  oldData.forEach((element) => {
    const TR = document.createElement("tr");
    const TD1 = document.createElement("td");
    const TD2 = document.createElement("td");
    const TD3 = document.createElement("td");
    const TD4 = document.createElement("td");
    const BTN = document.createElement("button");

    TD1.innerText = `${element.websiteName}`;
    TD2.innerText = `${element.userName}`;
    TD3.innerText = `${element.password}`;
    BTN.innerText = "Remove";
    BTN.classList.add("btn", "btn-outline-danger");
    
    BTN.addEventListener("click", () => {
      const data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
      const newData = data.filter((e) => {
        return e.userName !== element.userName;
      });

      localStorage.setItem("PasswordManager", JSON.stringify(newData));

      tbody.removeChild(TR);
    });

    TD4.appendChild(BTN);
    TR.appendChild(TD1);
    TR.appendChild(TD2);
    TR.appendChild(TD3);
    TR.appendChild(TD4);
    tbody.appendChild(TR);

    // <tr>
    //     <td>Spotify</td>
    //     <td>Om Dwivedi</td>
    //     <td>qwertt</td>
    //     <td><button class="btn btn-outline-danger">Remove</button></td>
    // </tr>
  });
}

viewSavedPassword();

function removeData() {}
