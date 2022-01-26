// interpolacion
// fechas

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let dia = fecha.getDate(); // este no aroja el dia del calendario
let dia2 = fecha.getDay(); // este nos arroja el numero de dia de la semana iniciando por el lunes

let hora = fecha.getHours() + ":" + fecha.getMinutes();

// 11:24:34 - 25/01/2022

let horaFecha =
  fecha.getHours() +
  ":" +
  fecha.getMinutes() +
  ":" +
  fecha.getSeconds() +
  " - " +
  fecha.getDate() +
  "/0" +
  (fecha.getMonth() + 1) +
  "/" +
  fecha.getFullYear();

console.log(horaFecha);

console.log(`${hora} - ${dia}/${mes}/${anio}`);
