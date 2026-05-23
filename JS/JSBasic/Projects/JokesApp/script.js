document.querySelector("button").addEventListener("click", () => {
  async function joke() {
    const API_URL = "https://official-joke-api.appspot.com/jokes/random";

    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data);
    

    document.getElementById("setup").innerHTML = data.setup;
    document.getElementById("delivery").innerHTML = data.punchline;


  }

  joke();


});
