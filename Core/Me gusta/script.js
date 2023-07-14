const likes = document.querySelectorAll(".number");
function incrementar(id){
  likes[id].innerHTML = parseInt(likes[id].textContent)+1;
}