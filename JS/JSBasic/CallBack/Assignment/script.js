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

// Question 4

console.log("Start");
console.log("End");
setTimeout(() => {
  console.log("Async Task");
}, 3000);

// Question 5

setTimeout(() => {
  console.log("First Step");

  setTimeout(() => {
    console.log("Second Step");
  }, 3000);
}, 2000);

// Question 6

function Order(name, func) {
  console.log("Taking Order from " + name + "...");

  setTimeout(() => {
    func();
  }, 2000);
}

function cooking(func) {
  console.log("Started cooking...");

  setTimeout(() => {
    func();
  }, 2000);
}

function serve(func) {
  console.log("Food departed to be served...");

  setTimeout(() => {
    func();
  }, 2000);
}

Order("Sagar Gaire", () => {
  console.log("Order Taken");
  cooking(() => {
    console.log("Cooking Completed");
    serve(() => {
      console.log("Food is Served");
    });
  });
});

// Question 8

function message(data, func) {
  console.log("Hello " + data);

  setTimeout(() => {
    func();
  }, 3000);
}

message("Om", () => {
  console.log("How are you ?");
});

// Question 9

document.querySelector("button").addEventListener("click", () => {
  console.log("Button Clicked");
});
