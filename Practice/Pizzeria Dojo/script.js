function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas){
  return {
    tipoCorteza: tipoCorteza,
    tipoSalsa: tipoSalsa,
    quesos: quesos,
    salsas: salsas
  };
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven("estilo Chicago" , "tradicional" , ["mozzarella", "cheddar"], ["cebollas"]);
console.log(pizza3);

var pizza4 = pizzaOven("lanzada a mano" , "tradicional" , ["mozzarella", "feta", "cheddar"], ["champiñones", "cebollas"]);
console.log(pizza4);