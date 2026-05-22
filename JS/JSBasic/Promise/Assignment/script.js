// // // // Question 1

// // // function task() {
// // //   return new Promise((resolve, reject) => {
// // //     console.log("Assigning Task...");

// // //     setTimeout(() => {
// // //       resolve(console.log("Task Completed"));
// // //     }, 3000);
// // //   });
// // // }

// // // task().then(() => {
// // //   console.log("Well Done!!!");
// // // });

// // // Question 2

// // function fetchData() {
// //   return new Promise((resolve, reject) => {
// //     console.log("Fetching Data...");

// //     setTimeout(() => {
// //       const num = Math.floor(Math.random() * 10);

// //       if (num < 5) {
// //         reject(console.log("Something went wrong"));
// //       } else {
// //         resolve(console.log("Data fetched"));
// //       }
// //     }, 3000);
// //   });
// // }

// // fetchData()
// //   .then()
// //   .catch(() => {
// //     console.log("You gave wrong details.");
// //   });

// // Question 4

// function num(digit) {
//   return new Promise((resolve, reject) => {
//     console.log("Checking Number...");

//     setTimeout(() => {
//       if (digit <= 10) {
//         resolve(console.log("Valid Number"));
//       } else {
//         reject();
//       }
//     }, 2000);
//   });
// }

// num(1)
//   .then()
//   .catch(() => {
//     console.log("Invalid Number");
//   });

// Question 8

function Q8(num) {
  return new Promise((resolve, reject) => {
    resolve(num);
  });
}

Q8(5)
  .then((num) => {
    console.log("Performing Addition operation");
    console.log("num becomes:-  " + (num + 5));
    return (num + 5);
  })
  .then((num) => {
    console.log("Performing Multiplication operation");
    console.log("num becomes:-  " + (num * 10));
    return (num * 10);
  })
  .then((num) => {
    console.log("Final Result:- " + num);
  });
