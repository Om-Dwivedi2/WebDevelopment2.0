console.log("1. Print numbers from 1 to 5 using a for loop.");

for (let a = 1; a <= 5; a++) {
  console.log(a);
}

console.log("2. Print numbers from 1 to 10 using a for loop.");

for (let b = 1; b <= 10; b++) {
  console.log(b);
}

console.log("3. Print numbers from 10 to 1 (reverse counting).");

for (let c = 10; c >= 1; c--) {
  console.log(c);
}

console.log("4. Print even numbers from 2 to 10. ");

for (let d = 2; d <= 10; d += 2) {
  console.log(d);
}

console.log("5. Print odd numbers from 1 to 9.");

for (let e = 1; e <= 9; e += 2) {
  console.log(e);
}

console.log("6. Print the table of 15 up to 10 steps.");

for (let i = 1; i <= 10; i++) {
  console.log(`15 x ${i} = ${15 * i}`);
}

console.log("7. Print numbers from 1 to 20 with increment of 2.");

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

console.log("8. Print numbers from 5 to 50 with increment of 5.");

for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}

console.log("9. Create a loop and print the square of numbers from 1 to 10.");

for (let i = 1; i <= 10; i++) {
  console.log(`${i} ** ${i} = ${i ** 2}`);
}

console.log("10. Print numbers from 1 to 10 that are divisible by 3.");

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
