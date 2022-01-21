let departamento = prompt(
  "Escribe uno de los siguientes departamentos: \nNorte de Santander \nCondinamarca \nCesar \nValle \nSantander"
);

let ciudad;

if (departamento == "norte de santander") {
  ciudad = prompt(
    "Escribe una de las siguientes ciudades del departamento de Norte de Santander \nCucuta \nOcaña \nAbrego \nPamplona \nConvencion"
  );

  if (ciudad == "cucuta") {
    alert("Cucuta la ciudad del calor");
  } else if (ciudad == "ocaña") {
    alert("Ocaña la ciudad de las mujeres bonitas");
  } else if (ciudad == "abrego") {
    alert("Abrego el vello valle");
  } else if (ciudad == "pamplona") {
    alert("pamplona el infierno pequeño");
  } else if (ciudad == "convencion") {
    alert("Convencion tierra de la panela");
  }
} else if (departamento == "cundinamarca") {
  ciudad = prompt(
    "Escribe una de las siguientes ciudades del departamento de Cundinamarca \nBogota \nVilleta \nCajica \nCota \nSoacha"
  );

  if (ciudad == "bogota") {
    alert("Bogota la ciudad mas fria de colombia");
  } else if (ciudad == "villeta") {
    alert("villeta es conocida por el Reinado Nacional de La Panela en enero");
  } else if (ciudad == "cajica") {
    alert("Cajicá es conocida por sus tejidos de lana virgen de oveja");
  } else if (ciudad == "cota") {
    alert("cota se caracteriza por prestar servicios de turismo");
  } else if (ciudad == "soacha") {
    alert(
      "El histórico Salto del Tequendama, sigue siendo reconocido como sitio turístico del municipio"
    );
  }
} else if (departamento == "cesar") {
  ciudad = prompt(
    "Escribe una de las siguientes ciudades del departamento de Cesar \nValledupar \nAguachica \nPelaya \nBosconia \nCurumani"
  );

  if (ciudad == "valledupar") {
    alert("valledupar la ciudad vallenata");
  } else if (ciudad == "aguachica") {
    alert(
      "Aguachica ubicado entre el valle interandino del Magdalena Medio y la Serranía de los Motilones"
    );
  } else if (ciudad == "pelaya") {
    alert("situado en el nordeste del país en el departamento de Cesar");
  } else if (ciudad == "bosconia") {
    alert(
      "Su nombre hace honor a Don Bosco, un santo y educador italiano fundador de los salesianos"
    );
  } else if (ciudad == "curumani") {
    alert(
      "Curumaní se encuentra ubicado en la zona de los Valles de los ríos Cesar y Magdalena"
    );
  }
} else if (departamento == "valle") {
  ciudad = prompt(
    "Escribe una de las siguientes ciudades del departamento de Valle \nBuenaventura \nCartago \nPalmira \nCali \nYumbo"
  );

  if (ciudad == "buenaventura") {
    alert(
      "el principal puerto marítimo de Colombia y uno de los diez puertos más importantes de América Latina"
    );
  } else if (ciudad == "cartago") {
    alert(
      "Es conocido como La Villa de Robledo y también como La ciudad del Sol más alegre de Colombia"
    );
  } else if (ciudad == "palmira") {
    alert("Es conocido como La Villa de las Palmas.");
  } else if (ciudad == "cali") {
    alert(
      "Es la única gran ciudad de Colombia que posee un acceso rápido al Océano Pacífico"
    );
  } else if (ciudad == "yumbo") {
    alert(
      "Es conocido como la capital industrial del Valle debido a las más de 2000 fábricas asentadas en su territorio"
    );
  }
} else if (departamento == "santander") {
  ciudad = prompt(
    "Escribe una de las siguientes ciudades del departamento de Santander \nBucaramanga \nBarrancabermeja \nFloridablanca \nGiron \nPiedecuesta"
  );

  if (ciudad == "bucaramanga") {
    alert(
      "La ciudad ha sido declarada como una de las ciudades más prósperas de América Latina"
    );
  } else if (ciudad == "barrancabermeja") {
    alert(
      "Es sede de la refinería de petróleo más grande del país y es la capital de la Provincia de Yariguíes"
    );
  } else if (ciudad == "floridablanca") {
    alert(
      "Floridablanca es conocida por sus obleas, su turismo, sus parques, sus centros comerciales, sus clínicas y su educación de calidad"
    );
  } else if (ciudad == "giron") {
    alert(
      "El municipio se conoce a nivel nacional por su casco antiguo caracterizado por su arquitectura colonial española"
    );
  } else if (ciudad == "piedecuesta") {
    alert(
      "su geografía ofrece un sinnúmero de valles, mesetas, montañas y colinas, accidentes territoriales que presentan una variada climatología, pasando del radiante sol de pescadero a la neblina del páramo de Juan Rodríguez"
    );
  }
}
