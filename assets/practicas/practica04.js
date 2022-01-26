// boton que active un prompt dende agreguemos  6 ciudades
// se almacenan las ciudades en un array
// boton que muestre una lista en la pagina con las ciudades 

let ciudades = [];
let botonAgregar =document.getElementById("btnAgregar");
let botonListar = document.getElementById("btnListar");
let contenedorTexto = document.getElementById("texto");

botonListar.style.pointerEvents= "none";


// funciones de agregar y listar

const agregarCiudad = () =>{
    ciudades.push(prompt("Agrega una ciudad:"));
    
    if(ciudades.length>=6){
        botonListar.style.pointerEvents="auto";
    }
}

const listarCiudades = () => {
    for(let i=0;i<ciudades.length;i++){
        contenedorTexto.innerHTML += "<h5>"+ciudades[i]+"</h5>"
    }
}


// eventos de onclick

botonAgregar.onclick = () => {
    agregarCiudad();
}

botonListar.onclick = () => {
    listarCiudades();
}

