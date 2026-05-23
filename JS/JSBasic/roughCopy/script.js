function sendEmail(email) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 5);
    const result = Math.floor(Math.random() * 10);
    console.log("Email is on the way...");

    setTimeout(() => {
      if (result < 5) {
        reject("Email was not sent succesfully!!!");
      }

      resolve("Email sent successfully!!!");
    }, time);
  });
}

const arr = [
  "om@example.com",
  "dev@example.com",
  "ram@example.com",
  "nayan@example.com",
  "anit@example.com",
];

arr.map((element)=>{})

