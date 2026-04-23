console.log("Hello World");

let a = document.querySelector("h1");
let inc = document.querySelector("#inc")
let dec = document.querySelector("#decs")


let i = 0;



inc.addEventListener("click", function () {
    
    a.innerHTML = ++i;
    console.log("increse clicked");
    
});

function om(){
    a.innerHTML = --i;
}

