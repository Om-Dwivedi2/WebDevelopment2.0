document.getElementById("addTask").addEventListener("click", (e) => {
  const task = document.getElementById("task").value;
  console.log(task);

  const OL = document.querySelector("ol");
  const LI = document.createElement("li");
  const SECTION = document.createElement("section");
  SECTION.classList.add(
    "container",
    "w-75",
    "bg-light",
    "rounded",
    "shadow",
    "p-3",
    "my-3",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  );

  const DIV = document.createElement("div");

  task === "" ? (DIV.innerText = "Empty") : (DIV.innerText = task);

  const BTN = document.createElement("button");
  BTN.classList.add("btn", "btn-outline-danger");
  BTN.addEventListener("click", () => {
    LI.remove();
  });

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");

  const SPAN = document.createElement("span");
  SPAN.innerText = "Remove";

  BTN.appendChild(I);
  BTN.appendChild(SPAN);

  SECTION.appendChild(DIV);
  SECTION.appendChild(BTN);

  LI.appendChild(SECTION);
  OL.appendChild(LI);
});
