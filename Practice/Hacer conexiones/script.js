
const name = document.querySelector("#name");
function changeName(){
  name.innerHTML = "Jessica Armoa";
}

function decline(id){
  const element = document.querySelector(id);
  element.remove();
  const span_requests = document.querySelector("#span_request");
  span_requests.innerHTML = parseInt(span_requests.textContent) - 1;
}

function accept(id){
  const element = document.querySelector(id);
  element.remove();
  const [span_requests, span_connections] = document.querySelectorAll(".notificacion");
  span_requests.innerHTML = parseInt(span_requests.textContent) - 1;
  span_connections.innerHTML = parseInt(span_connections.textContent) + 1;
}