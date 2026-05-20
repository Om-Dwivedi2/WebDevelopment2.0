function getData(data) {
  let hello = new Promise((resolve, reject) => {
    console.log("Getting Data...");

    setTimeout(() => {
      if (data === 3) {
        reject(console.log("Your request is rejected"));
      } else {
        resolve(console.log("Your data: " + data));
      }
    }, 1000);
  });

  return hello;
}

let om = getData(1)
  .then(getData(2))
  .then(getData(3))
  .then(getData(4))
  .then(getData(5))
  .then(getData(6));
