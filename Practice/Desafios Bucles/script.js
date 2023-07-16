/*Imprimir impares 1-20 Usando un bucle, escribe un código que haga que console.log
imprima todos los valores impares del 1 al 20.*/
for(let i = 1; i <= 20; i=i+2) {
  console.log(i);
}

/*Disminuir múltiplos de 3 Usando un bucle, escribe un código que haga que console.log
imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.*/
for(let i = 100; i >= 0; i--) {
  if(i%3 == 0){
    console.log(i);
  }
}

/*Imprime la secuencia Usando un bucle, escribe un código que haga que console.log
imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.*/
for(let i = 4; i >= -3.5; i=i-1.5) {
  console.log(i);
}

/*Sigma Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final,
console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.*/
let suma = 0;
for(let i = 1; i <= 100; i++) {
  suma += i;
}
console.log(suma);

/*Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable product y, al final,
console.log dé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600 al final. */
let product = 1;
for(let i = 2; i <= 12; i++) {
  product *= i;
}
console.log(product);