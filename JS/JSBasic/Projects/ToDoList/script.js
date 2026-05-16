document.getElementById("addTask").addEventListener("click", (e) => {
  const task = document.getElementById("task").value.trim();
  console.log();

  if (!task) {
    alert("Name the task");
    return;
  }

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

  DIV.innerText = task;

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

  const oldTask = JSON.parse(localStorage.getItem("kaam")) || [];

  oldTask.push(task);

  localStorage.setItem("kaam", JSON.stringify(oldTask));

});

function recreateOldTask() {
  const oldTask = JSON.parse(localStorage.getItem("kaam")) || [];

  oldTask.forEach((element) => {

  
    const task = element;

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

    DIV.innerText = task;

    const BTN = document.createElement("button");
    BTN.classList.add("btn", "btn-outline-danger");
    BTN.addEventListener("click", () => {
      LI.remove();

      const newTask = oldTask.filter(e => e !== task);


      console.log(newTask);
      

      localStorage.setItem("kaam" , JSON.stringify(newTask))


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
}

recreateOldTask();
