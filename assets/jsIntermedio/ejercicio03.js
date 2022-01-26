// DOM

let ejFor = document.getElementById("btnEjecutar");
let ejem = document.getElementById("nombreUsuario");

// funcion emergente

const emergente = () => {
  for (let i = 0; i < 5; i++) {
    window.open(
      "https://www.pasionbiker.com/wp-content/uploads/2017/04/Una-de-las-motos-deportivas-ma%CC%81s-ra%CC%81pidas-00.png"
    );
  }
};


// evento onclick al boton ejFor
ejFor.onclick = () => {
  emergente();
};
