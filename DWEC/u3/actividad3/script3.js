const zonadibujo = document.getElementById("zonadibujo");

//DEFINICIÓN DE ESTILOS
zonadibujo.style.display = "flex";
zonadibujo.style.width = "fit-content";
zonadibujo.style.border = "2px solid black";

for (let i = 1; i <= 30; i++) {
  let fila = document.createElement("div");
  zonadibujo.appendChild(fila);
  for (let j = 1; j <= 30; j++) {
    let item = document.createElement("div");
    //DEFINICIÓN DE ESTILOS DE CADA ELEMENTO DENTRO DE LA ZONA DE DIBUJO
    item.style.width = "10px";
    item.style.height = "10px";
    item.style.border = "1px solid black";

    //DEFINICIÓN DE COLORES DE FORMA RANDOM
    rojo = Math.round(255 * Math.random());
    verde = Math.round(255 * Math.random());
    azul = Math.round(255 * Math.random());

    //ASIGNACIÓN DE COLOR AL ELEMENTO
    item.style.backgroundColor = `rgb(${rojo},${verde},${azul})`;

    //SE AGREGA CADA ELEMENTO A LA FILA EN CURSO
    fila.appendChild(item);
  }
}
