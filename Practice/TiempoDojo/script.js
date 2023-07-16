function dismiss(id) {
  const element = document.querySelector(id);
  element.remove();
}

function changeTemperatures(element_select){
  const span_temperatures = document.querySelectorAll("span.temperature");
  console.log(span_temperatures);
  if(element_select.value == "f"){
    for(let span of span_temperatures){
      span.innerHTML = ((parseInt(span.textContent) * 1.8) + 32).toFixed(2);
    }
  }else{
    for(let span of span_temperatures){
      span.innerHTML = ((parseInt(span.textContent) - 32) / 1.8).toFixed(0);
    }
  }
}

function alertar(){
  alert("Loading weather report...")
}