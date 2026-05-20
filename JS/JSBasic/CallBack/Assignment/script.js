// Question 1
function greet(callBack) {
  console.log("Hello User");

  setTimeout(() => {
    callBack();
  }, 5000);
}

greet(() => {
  console.log("I am Google Gemini");
});

// Question 2

function Q2(func) {
  func();
}

Q2(function sayBye() {
  console.log("Bye Sir !!!");
});

// Question 3

setTimeout(() => {
  console.log("Welcome");
}, 2000);
