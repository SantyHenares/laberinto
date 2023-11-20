var esH1 = true;

function cambiarElemento() {
  var contenedor = document.getElementById("contenedor");
  var elementoActual = contenedor.firstElementChild; // Obtener el primer hijo del contenedor

  if (esH1) {
    // Crear un nuevo elemento 'p'
    var nuevoElemento = document.createElement("p");
    nuevoElemento.textContent =
      "En este espacio, quiero compartir contigo un viaje a través de experiencias y conocimientos que he adquirido a lo largo de mi vida. Mi enfoque se basa en una búsqueda constante de comprensión y armonía en el laberinto de la existencia. A medida que exploramos este viaje juntos, descubriremos cómo las enseñanzas filosóficas se entrelazan con las experiencias de la vida cotidiana. Mi objetivo es proporcionar una perspectiva única y valiosa que pueda inspirarte, motivarte y, sobre todo, fomentar la reflexión. La integración filosófica, para mí, es un camino hacia la sabiduría práctica y la autenticidad. Te invito a unirte a este viaje de autodescubrimiento y crecimiento personal. ¡Gracias por ser parte de esta comunidad!"; // (tu texto aquí)

    // Reemplazar el elemento actual con el nuevo elemento 'p'
    contenedor.replaceChild(nuevoElemento, elementoActual);

    // Actualizar el estado del botón
    document.getElementById("miBoton").textContent = "Volver";
  } else {
    // Crear un nuevo elemento 'h1'
    var nuevoElemento = document.createElement("h1");
    nuevoElemento.textContent = "BIENVENIDOS A LABERINTOS";

    // Reemplazar el elemento actual con el nuevo elemento 'h1'
    contenedor.replaceChild(nuevoElemento, elementoActual);

    // Actualizar el estado del botón
    document.getElementById("miBoton").textContent = "Introducción";
  }

  // Cambiar el estado para el próximo clic
  esH1 = !esH1;
}
