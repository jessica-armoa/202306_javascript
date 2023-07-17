function siempreHambriento(arr) {
  for(let comida of arr) {
    if(comida == "comida"){
      console.log("Delicioso");
    }
  }
  if(!arr.includes("comida")){
    console.log("Tengo hambre");
  }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"


function highPass(arr, cutoff) {
  var filteredArr = [];
  for(let num of arr){
    if(num > cutoff){
      filteredArr.push(num);
    }
  }
  return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


function betterThanAverage(arr) {
  var sum = 0;
  for(let num of arr){
    sum += num;
  }
  let prom = sum / arr.length;
  var count = 0
  // cuenta cuántas variables son mayores que el promedio
  for(let num of arr){
    if(num>prom){
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta


function reverse(arr) {
  newArr = [];
  for(let i=arr.length-1; i>=0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
  // [0, 1] son los valores inciales del arreglos para calcular el resto
  var fibArr = [0, 1];
  for(let i = 0; i < n-2; i++){
    fibArr.push(fibArr[i] + fibArr[i+1]);
  }
  return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
