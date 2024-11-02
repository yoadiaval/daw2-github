//listado de imágenes
const imglist = [
  "./imgs/1.jpg",
  "./imgs/2.jpg",
  "./imgs/3.jpg",
  "./imgs/4.jpg",
  "./imgs/5.jpg",
];

let pos = 0;
const img = document.querySelector("img");
const positionItems = document.getElementsByClassName("positionItem");
let timer = setInterval(next, 3000); //ejecuta la funcion next cada 3segundos

//funcion que muestra la imagen siguiente
function next() {
  cambiarImagen(pos);
  pos == imglist.length - 1 ? (pos = 0) : pos++;
}

//funcion que muestra la imagen anterior
function backward(element) {
  cambiarImagen(pos);
  pos == 0 ? (pos = imglist.length - 1) : pos--;
}

//cambia la imagen que se muestra
function cambiarImagen(pos) {
  img.setAttribute("src", imglist[pos]);

  //resalta en blanco la posición de la imagen en curso y al resto les agrega opacidad
  for (let i = 0; i < positionItems.length; i++) {
    if (i == pos) {
      positionItems[pos].style.backgroundColor = "white";
    } else {
      positionItems[i].style.backgroundColor = " rgba(255, 255, 255, 0.338)";
    }
  }
}

//imprime en pantalla los puntos que indican la posicion de la imagen
for (let i = 0; i < imglist.length; i++) {
  document.getElementById(
    "position"
  ).innerHTML += `<div class="positionItem"></div>`;
}

//Elimina el temporizador cuado el mouse está soobre el ícono de atrás o siguiente
function clearTemp() {  
  clearInterval(timer);
}
//Agrega el temporizador cuado se sale del ícono de atrás o siguiente
function startTemp(){
  timer = setInterval(next, 3000);
};