// Array

let personas = [];

let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"];

// console.log(animales);

// for (let i = 0; i < animales.length; i++) {
//     console.log(animales[i]);
// }

// remplzar un valor de un array

// animales[10] = "Tiburon";
// console.log(animales);

// for (let i = 0; i < animales.length; i++) {
//   console.log(animales[i]);
// }

// animales.push("Ardilla"); // para agregar al final
// console.log(animales);

// animales.unshift("Tigre"); // para agregar al principio
// console.log(animales);

// animales.pop("Mantis"); // este es todo raro jajajajaja toxico
// console.log(animales);

// delete animales[4];

console.log(animales);

animales.splice(3,3); // para eliminar desde una posicion indicada
console.log(animales);
