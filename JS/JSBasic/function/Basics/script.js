//----------------Functions-------------//

// let a = 10,
//   b = 20;

// function sum(x, y) {
//   let z = x + y;
//   console.log(z);
// }

// sum(a, b);

let abc = function () {
  console.log("Hello");
};

console.log(abc);

abc(); // isse abc variable hi function bann gaya

//-----------Arrow Function-------//

const arrowfun = () => {
  console.log("Hello World");
};

const sumArrow = (a,b) => a+b;

console.log(sumArrow(5,4));
