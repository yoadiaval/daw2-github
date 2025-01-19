function redimensionaBarra() {
  if (!medio.ended) {
    var total = parseInt((medio.currentTime * maximo) / medio.duration);
    progreso.style.width = total + "px";
  } else {
    progreso.style.width = "0px";
    play.value = "\u25BA";
    window.clearInterval(bucle);
  }
}

function desplazarMedio(e) {
  if (!medio.paused && !medio.ended) {
    var ratonX = e.pageX - barra.offsetLeft;
    var nuevoTiempo = (ratonX * medio.duration) / maximo;
    medio.currentTime = nuevoTiempo;
    progreso.style.width = ratonX + "px";
  }
}

function accionPlay() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    play.value = "\u25BA";
    window.clearInterval(bucle);
  } else {
    medio.play();
    play.value = "||";
    bucle = setInterval(redimensionaBarra, 1000);
  }
}

function reiniciarFn() {
  medio.currentTime = 0; /*Reinicia el tiempo de reproducción a cero*/
 /*En caso de que el video esté en pause reinicia el video, modifica los valores del btn play y actualiza la barra de estado */ 
  if (medio.pause) {
    medio.play(); 
    play.value = "||";
    bucle = setInterval(redimensionaBarra, 1000);
  }
}
function retrasarFn() {
  console.log(medio.duration);
  medio.currentTime -= 5; /*retrasa  5 segundos*/
}
function adelantarFn() {
  medio.currentTime += 5; /*adelanta 5 segundos*/
}

function sileciarFn() {
  medio.muted = !medio.muted;
  silenciar.value = medio.muted ? "escuchar" : "silenciar";
}

function bajarVol() {
  /*Verifica que al efectuar la resta este valor no está por debajo de cero*/
  if (medio.volume - 0.1 > 0) {
    medio.volume -= 0.1;
  }
}
function subirVol() {
 /*Controla que el volumen no supere el valor de 1*/
  if (medio.volume < 1) {
    medio.volume += 0.1;
  }
}

function iniciar() {
  maximo = 700;

  medio = document.getElementById("medio");
  barra = document.getElementById("barra");
  progreso = document.getElementById("progreso");
  play = document.getElementById("play");
  /* obtener los objetos del resto de elementos necesarios */
  reiniciar = document.getElementById("reiniciar");
  retrasar = document.getElementById("retrasar");
  adelantar = document.getElementById("adelantar");
  silenciar = document.getElementById("silenciar");
  menosVolumen = document.getElementById("menosVolumen");
  masVolumen = document.getElementById("masVolumen");

  play.addEventListener("click", accionPlay, false);
  /* crear los manejadores de eventos para el resto de botones */
  reiniciar.addEventListener("click", reiniciarFn, false);
  retrasar.addEventListener("click", retrasarFn, false);
  adelantar.addEventListener("click", adelantarFn, false);
  silenciar.addEventListener("click", sileciarFn, false);
  menosVolumen.addEventListener("click", bajarVol, false);
  masVolumen.addEventListener("click", subirVol, false);

  barra.addEventListener("click", desplazarMedio, false);
}

window.addEventListener("load", iniciar, false);
