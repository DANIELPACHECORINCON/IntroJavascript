let edad = prompt("Ingrese su edad");

switch (edad) {
  case "16":
    alert("el catalogo esat disponible");
    break;

  default:
    alert("el catalogo esat bloqueado");
    break;
}

if (ciudad === "bogota" || ciudad === "pasto"){
    alert("clima frio");
}else if( ciudad === "armenia" || ciudad === "medellin"){
    alert("clima templado");
}else{
    alert("clima caliente");
}
