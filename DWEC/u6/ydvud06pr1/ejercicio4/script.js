//Inicialización de variables globales
let numFilas;
let numCeldas;
let totalMinas;
let seg = 0;
let timer;
let estadoJuego;

//------------------------------EVENTO SUBMIT---------------------------------------------//
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  seg = 0;
  estadoJuego = true;

  clearInterval(timer); //elimina el timer si estuviera. Esto elvita anomalías
  //si se detecta otro evento submit anter de terminar el juego.
  timer = setInterval(reloj, 1000);

  tablero = document.getElementById("tablero");
  //cargo datos segun dificultad del juego
  tablero.innerHTML = "";
  switch (this.elements[0].value) {
    case "1":
      numFilas = ramdomValue(10, 20);
      numCeldas = ramdomValue(10, 20);
      totalMinas = 25;
      break;
    case "2":
      numFilas = ramdomValue(20, 40);
      numCeldas = ramdomValue(20, 40);
      totalMinas = 60;
      break;
    case "3":
      numFilas = ramdomValue(40, 80);
      numCeldas = ramdomValue(40, 80);
      totalMinas = 100;
      break;
    case "4":
      numFilas = ramdomValue(80, 100);
      numCeldas = ramdomValue(80, 100);
      totalMinas = 140;
      break;
  }
  contadorMinas = totalMinas;
  celdasParaGanar = numFilas * numCeldas - totalMinas; //calculas el total de celdas
  //que deben de estar descubiertas
  //para poder ganar
  document.getElementById("contadorMinas").innerHTML = `${contadorMinas}`;
  //genero una matriz en funcion de los datos de dificultad
  matriz = [];
  for (let i = 0; i < numFilas; i++) {
    matriz[i] = [];
    for (let j = 0; j < numCeldas; j++) {
      matriz[i][j] = 0;
    }
  }
  //Agrego las bombas de forma aleatoria controlando que no se repitan las celdas
  for (let i = 0; i < totalMinas; i++) {
    do {
      let fila = Math.floor(numFilas * Math.random());
      let celda = Math.floor(numCeldas * Math.random());
      hasMina = matriz[fila][celda] == "b"; //verifico que ya haya una mina en esa posición
      if (!hasMina) {
        matriz[fila][celda] = "b";
      }
    } while (hasMina);
  }

  //agrego los valores de proximidad
  for (let i = 0; i < numFilas; i++) {
    for (let j = 0; j < numCeldas; j++) {
      //analizo  las casillas que no tienen bomba
      if (matriz[i][j] !== "b") {
        let celdasProx = [];
        let proximidad = 0;
        //genero un array con con el contenido de las celdas conyiguas
        //tengo en cuenta las condiciones de contorno de mi matriz
        //para no pedir valores que no estén contenidos dentro de ella.
        celdasProx = ObtenerArrayProximidad(i, j, matriz);

        //cuento las bombas en las proximidades.
        for (let value of celdasProx) {
          if (matriz[value[0]][value[1]] == "b") {
            proximidad++;
          }
        }
        //para esa fila y para esa columna en la matriz almaceno las bombas proximas
        matriz[i][j] = proximidad;
      }
    }
  }
  console.table(matriz);
  creaeTablero(numFilas, numCeldas); //Se agregan las celdas al tablero
  arrayCeldas = Array.from(document.querySelectorAll("#tablero td")); //se guarda el nodeList de las celdas dentro del tablero

  //agrego escuchador de click para todos los elementos del td de mi tabla
  arrayCeldas.forEach((element) => {
    element.addEventListener("click", function () {
      filaSelected = this.getAttribute("f");
      celdaSelected = this.getAttribute("c");
      valorEnMatriz = matriz[filaSelected][celdaSelected];

      if (estadoJuego) {
        if (valorEnMatriz == 0) {
          descubrir(this, matriz);
          comprobarSiGano(arrayCeldas, celdasParaGanar);
        } else if (valorEnMatriz !== "b") {
          //Al hacer click la casilla cambia de color y se le agrega como html el valor
          //correcpondiente en la matriz de valores
          this.style.backgroundColor = "white";
          this.innerHTML = `${valorEnMatriz}`;

          //compruebo si se ha ganado el juego
          comprobarSiGano(arrayCeldas, celdasParaGanar);
        } else if (valorEnMatriz == "b") {
          this.style.backgroundColor = "red";

          alert("Ha perdido el Juego");
          clearInterval(timer);
          seg = 0;
          estadoJuego = false;
        }
      }
    });
  });

  //control de click secundario
  arrayCeldas.forEach((element) => {
    element.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      // Usamos else if para verificar cada condición de forma secuencial
      if (this.innerText === "") {
        this.innerHTML = "m";
        contadorMinas--;
        updateContadorMinas(contadorMinas);
      } else if (this.innerText === "m") {
        this.innerHTML = "?";
        contadorMinas++;
        updateContadorMinas(contadorMinas);
      } else if (this.innerText === "?") {
        this.innerHTML = "";
      }
    });
  });
});

//---------------------------------------FUNCIONES AUXILIARES-----------------------------------//

//devuelve un valor ramdom para las columnas y las filas en función de el valor minimo y máximo que establece la dificultad
function ramdomValue(min, max) {
  value = Math.floor((max - min) * Math.random()) + min;
  return value;
}

//Crea tablero y se le pasa como atributo la fila y la columna de cada elemento td
function creaeTablero(f, c) {
  for (let i = 0; i < f; i++) {
    tr = document.createElement("tr");
    for (let j = 0; j < c; j++) {
      tr.innerHTML += `<td id="celda_${i}_${j}" f=${i} c=${j} ></td>`;
    }
    document.getElementById("tablero").appendChild(tr);
  }
}

//Muestra segundos en pantalla
function reloj() {
  document.getElementById("reloj").innerHTML = `${seg++}`;
}

//Actualiza el contador de minas cuando se marca la casilla
function updateContadorMinas(contadorMinas) {
  document.getElementById("contadorMinas").innerHTML = `${contadorMinas}`;
}

//Halla las cordenadas de las celdas próximas y las devuelve en un array
function ObtenerArrayProximidad(i, j) {
  //Evalua con la centencia switch que no se incluyan aquellas coordenadas
  //que no aplican a la matriz en curso
  switch (true) {
    case i == 0 && j == 0:
      celdasProx = [
        [i, j + 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];
      break;
    case i == 0 && j == numCeldas - 1:
      celdasProx = [
        [i, j - 1],
        [i + 1, j - 1],
        [i + 1, j],
      ];
      break;
    case i == numFilas - 1 && j == numCeldas - 1:
      celdasProx = [
        [i - 1, j - 1],
        [i - 1, j],
        [i, j - 1],
      ];
      break;
    case j == numCeldas - 1:
      celdasProx = [
        [i - 1, j - 1],
        [i - 1, j],
        [i, j - 1],
        [i + 1, j - 1],
        [i + 1, j],
      ];
      break;
    case i == 0:
      celdasProx = [
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];
      break;

    case j == 0 && i == numFilas - 1:
      celdasProx = [
        [i - 1, j],
        [i - 1, j + 1],
        [i, j + 1],
      ];
      break;
    case j == 0:
      celdasProx = [
        [i - 1, j],
        [i - 1, j + 1],
        [i, j + 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];
      break;

    case i == numFilas - 1:
      celdasProx = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
      ];
      break;
    default:
      celdasProx = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];
      break;
  }
  return celdasProx;
}

//funcion recursiva que descubre todas las casillas en blanco automáticamente
function descubrir(element, m) {
  element.style.backgroundColor = "white";
  element.style.color = "white"; //evita tras un segunclo click que se muestre una "X" que indica casilla marcada
  f = parseInt(element.getAttribute("f"));
  c = parseInt(element.getAttribute("c"));
  matriz[f][c] = "X"; //marca la casilla para que no se vuelva a analizar
  celdasProx = ObtenerArrayProximidad(f, c); //obtiene un array de celdas próximas

  //Recorre las celdas próximas en busca de más casillas blancas (referenciadas en la matriz con cero)
  for (let value of celdasProx) {
    if (matriz[value[0]][value[1]] === 0) {
      descubrir(document.querySelector(`#celda_${value[0]}_${value[1]}`), m);
    } else if (
      matriz[value[0]][value[1]] > 0 ||
      matriz[value[0]][value[1]] <= 8
    ) {
      document.querySelector(`#celda_${value[0]}_${value[1]}`).innerText =
        matriz[value[0]][value[1]];
      document.querySelector(
        `#celda_${value[0]}_${value[1]}`
      ).style.backgroundColor = "white";
    }
  }
}

//Comprueba sei se ha ganado. Se le pasa por parámetro el array de celdas y el total de celdas
//que necesitan estar descubiertas para poder ganar
function comprobarSiGano(arrayCeldas, celdasParaGanar) {
  let totalDescubiertas = arrayCeldas.reduce((total, currentValue) => {
    if (
      getComputedStyle(currentValue).backgroundColor === "rgb(255, 255, 255)" //si la celda está descubierta es porque el background es blanco
    ) {
      total++;
    }
    return total; // Devuelve total de celdas descubiertas
  }, 0);

  if (celdasParaGanar == totalDescubiertas) {
    estadoJuego = false;
    clearInterval(timer);
    alert("Ha Ganado el Juego");
  }
}
