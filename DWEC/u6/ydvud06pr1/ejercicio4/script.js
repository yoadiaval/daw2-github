let numFilas;
let numCeldas;
let totalMinas;
let seg = 0;
//devuelve un valor ramdom para las columnas y las filas en función de el valor minimo y máximo que establece la dificultad
function ramdomValue(min, max) {
  value = Math.floor((max - min) * Math.random()) + min;
  return value;
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  seg = 0;
  estadoJuego = true;
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
  document.getElementById("contadorMinas").innerHTML = `${contadorMinas}`;
  //genero una matriz en funcion de los datos de dificultad
  matriz = [];
  for (let i = 0; i < numFilas; i++) {
    matriz[i] = [];
    for (let j = 0; j < numCeldas; j++) {
      matriz[i][j] = 0;
    }
  }
  //agrego las bombas de forma aleatoria
  for (let i = 0; i < totalMinas; i++) {
    matriz[Math.floor(numFilas * Math.random())][
      Math.floor(numCeldas * Math.random())
    ] = "b";
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
          if (value == "b") {
            proximidad++;
          }
        }
        //para esa fila y para esa columna en la matriz almaceno las bombas proximas
        matriz[i][j] = proximidad;
      }
    }
  }

  creaeTablero(numFilas, numCeldas);
  arrayCeldas = document.querySelectorAll("#tablero td");
  timer = setInterval(reloj, 1000);

  //agrefo escuchador de click para todos los elementos del td de mi tabla
  arrayCeldas.forEach((element) => {
    element.addEventListener("click", function () {
      filaSelected = this.getAttribute("f");
      celdaSelected = this.getAttribute("c");
      valorEnMatriz = matriz[filaSelected][celdaSelected];

      if (estadoJuego) {
        if (valorEnMatriz !== "b") {
          //Al hacer click la casilla cambia de color y se le agrega como html el valor
          //correcpondiente en la matriz de valores
          this.style.backgroundColor = "green";
          this.innerHTML = `${valorEnMatriz}`;
        } else if (valorEnMatriz == "b") {
          this.style.backgroundColor = "red";
          this.innerHTML = `${valorEnMatriz}`;
          alert("Ha perdido");
          clearInterval(timer);
          seg = 0;

          estadoJuego = false;
        } else {
            descubrir(filaSelected, celdaSelected, matriz);
         
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

//función que crea tablero y se le pasa como atributo la fila y la columna de cada elemento td
function creaeTablero(f, c) {
  for (let i = 0; i < f; i++) {
    tr = document.createElement("tr");
    for (let j = 0; j < c; j++) {
      tr.innerHTML += `<td f=${i} c=${j} ></td>`;
    }
    document.getElementById("tablero").appendChild(tr);
  }
}

function reloj() {
  document.getElementById("reloj").innerHTML = `${seg++}`;
}

function marcar(element) {
  element.style.backgroundColor = "blue";
}

function updateContadorMinas(contadorMinas) {
  document.getElementById("contadorMinas").innerHTML = `${contadorMinas}`;
}

function ObtenerArrayProximidad(i, j, matriz) {
  switch (true) {
    case i == 0 && j == 0:
      celdasProx = [matriz[i][j + 1], matriz[i + 1][j], matriz[i + 1][j + 1]];
      break;
    case i == 0:
      celdasProx = [
        matriz[i][j - 1],
        matriz[i][j + 1],
        matriz[i + 1][j - 1],
        matriz[i + 1][j],
        matriz[i + 1][j + 1],
      ];
      break;
    case i == 0 && j == numCeldas - 1:
      celdasProx = [matriz[i][j - 1], matriz[i + 1][j - 1], matriz[i + 1][j]];
      break;
    case j == 0 && i == numFilas - 1:
      celdasProx = [matriz[i - 1][j], matriz[i - 1][j + 1], matriz[i][j + 1]];
      break;
    case j == 0:
      celdasProx = [
        matriz[i - 1][j],
        matriz[i - 1][j + 1],
        matriz[i][j + 1],
        matriz[i + 1][j],
        matriz[i + 1][j + 1],
      ];
      break;
    case i == numFilas - 1 && j == numCeldas - 1:
      celdasProx = [matriz[i - 1][j - 1], matriz[i - 1][j], matriz[i][j - 1]];
      break;
    case i == numFilas - 1:
      celdasProx = [
        matriz[i - 1][j - 1],
        matriz[i - 1][j],
        matriz[i - 1][j + 1],
        matriz[i][j - 1],
        matriz[i][j + 1],
      ];
      break;
    default:
      celdasProx = [
        matriz[i - 1][j - 1],
        matriz[i - 1][j],
        matriz[i - 1][j + 1],
        matriz[i][j - 1],
        matriz[i][j + 1],
        matriz[i + 1][j - 1],
        matriz[i + 1][j],
        matriz[i + 1][j + 1],
      ];
      break;
  }
  return celdasProx;
}

function descubrir(f,c,m){
    arrCels = document.querySelectorAll("#tablero td")
     arr = ObtenerArrayProximidad(filaSelected, celdaSelected, matriz);
     for (let valuen of arr) {
       if (value == 0) {
        arrCels =  
       }
     }
}