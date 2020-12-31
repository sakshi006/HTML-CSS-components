// const text = document.querySelector("#txt")
const button = document.querySelector("#btn");
const output = document.querySelector(".output")
const output2 = document.querySelector(".output2")

const serverURL = "https://v2.jokeapi.dev/joke/Any";

function errorHandler(error){
   alert("something is wrong");
}

function fetchURL(){
  fetch(serverURL)
  .then(Response=>Response.json())
  .then(json=>{
     var jokeSetup = (json.setup);
     var jokeDelivery = (json.delivery);
     output.innerHTML=jokeSetup;
     output2.innerHTML=jokeDelivery;
   })
  .catch(errorHandler) 
}

button.addEventListener("click",fetchURL);