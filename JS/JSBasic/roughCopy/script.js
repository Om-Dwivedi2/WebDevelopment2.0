const btn = document.querySelector("button");

btn.addEventListener(
  "click",
  () => {
    let a = 1;
    console.log("hello");
    
    const int = setInterval(() => {
      console.log(a++);
    }, 100);

    setTimeout(() => {
      clearInterval(int)
    }, 5000);
  },
  
);
