let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let direccion = document.getElementById("direccion");
let telefono = document.getElementById("telefono");
let documento = document.getElementById("documento");
let btnAgregar = document.getElementById("btnAgregar");

const ingresarDatos = () => {
  let nombreUsuario = prompt("Ingrese su nombre");
  nombre.innerHTML = "Nombre: " + nombreUsuario;
  localStorage.setItem("nombre", nombreUsuario);

  let edadUsuario = prompt("Ingrese su edad");
  edad.innerHTML = "Edad: " + edadUsuario;
  localStorage.setItem("edad", edadUsuario);

  let direccionUsuario = prompt("Ingrese su direccion");
  direccion.innerHTML = "Direccion: " + direccionUsuario;
  localStorage.setItem("direccion", direccionUsuario);

  let telefonoUsuario = prompt("Ingrese su telefono");
  telefono.innerHTML = "Telefono: " + telefonoUsuario;
  localStorage.setItem("telefono", telefonoUsuario);

  let documentoUsuario = prompt("Ingrese su documento");
  documento.innerHTML = "Documento: " + documentoUsuario;
  localStorage.setItem("documento", documentoUsuario);
};

if (localStorage.getItem("nombre")) {
  nombre.innerHTML = "Nombre: " + localStorage.getItem("nombre");
}
if (localStorage.getItem("edad")) {
  edad.innerHTML = "Edad: " + localStorage.getItem("edad");
}
if (localStorage.getItem("direccion")) {
  direccion.innerHTML = "Direccion: " + localStorage.getItem("direccion");
}
if (localStorage.getItem("telefono")) {
  telefono.innerHTML = "Telefono: " + localStorage.getItem("telefono");
}
if (localStorage.getItem("documento")) {
  documento.innerHTML = "Documento: " + localStorage.getItem("documento");
}

btnAgregar.onclick = function () {
  ingresarDatos();
};
