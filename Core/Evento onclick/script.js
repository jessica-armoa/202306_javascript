const button_log = document.querySelector("#log");
const button_add = document.querySelector("#add-definition");

function changeState(){
  button_log.innerHTML = "Logout";
}

function add_definition(){
  button_add.remove();
}

function alertar(){
  alert("Ninja was clicked");
}