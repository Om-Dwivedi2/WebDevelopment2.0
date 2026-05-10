const input = document.getElementById("number");
const btn = document.querySelector("button");
const random = Math.floor(Math.random() * 10) + 1;

btn.addEventListener("click", () => {
  console.log(random);
  
  if (input.value > 100 || input.value < 1) {
    alert("Give number within range");
    window.location.reload();
  } else if (input.value == random) {
    alert("Congratulation you guessed the corrent number");
    window.location.reload();
  } else if (input.value > random) {
    alert("OOPS! SORRY!!! TRY A SMALLER NUMBER");
  } else {
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  }
});
