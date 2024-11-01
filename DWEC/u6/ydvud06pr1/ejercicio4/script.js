numFilas = 10; //numero de filas
numCeldas = 20;
totalMinas = 25;

matriz = [];
for (let i = 0; i < numFilas; i++) {
  matriz[i] = [];
  for (let j = 0; j < numCeldas; j++) {
    matriz[i][j] = "<td></td>";
  }
}

//Agrego class= "mina" a los elementos td de la matriz de forma random
for (let i = 0; i < totalMinas; i++) {
  matriz[Math.floor(numFilas * Math.random())][
    Math.floor(numCeldas * Math.random())
  ] = "<td class='mina'></td>";
}

//Agrego valores de proximidad a la matriz
for (let i = 0; i < numFilas; i++) {
  for (let j = 0; j < numCeldas; j++) {
    if (!/class=\'mina\'/.test(matriz[i][j])) {
      console.log("i:" + i);
      console.log("j:" + j);

      let celdasProx = [];
      let proximidad = 0;

      switch (true) {
        case i == 0 && j == 0:
          celdasProx = [
            matriz[i][j + 1],
            matriz[i + 1][j],
            matriz[i + 1][j + 1],
          ];
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
          celdasProx = [
            matriz[i][j - 1],
            matriz[i + 1][j - 1],
            matriz[i + 1][j],
          ];
          break;
        case j == 0 && i == numFilas - 1:
          celdasProx = [
            matriz[i - 1][j],
            matriz[i - 1][j + 1],
            matriz[i][j + 1],
          ];
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
          celdasProx = [
            matriz[i - 1][j - 1],
            matriz[i - 1][j],
            matriz[i][j - 1],
          ];
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

      for (let value of celdasProx) {
        if (/class=\'mina\'/.test(value) && value !== undefined) {
          proximidad++;
        }
      }
      matriz[i][j] = `<td>${proximidad}</td>`;
    }
  }
}

//console.log(matriz[0][0]);

//maqueto la tabla en funcion de los valores que tiene la matriz
for (let i = 0; i < numFilas; i++) {
  document.getElementById("tablero").innerHTML += `${matriz[i].join("")}`;
}

/*celdas = new Array(numCeldas).fill("<td></td>"); //celdas por fila
tablero = document.getElementById("tablero");
tableroCeldas = document.querySelectorAll("#tablero td");

//---------------SEMAQUETA EL TABLERO-----------------------------/
for (let i = 0; i < numFilas; i++) {
  tablero.innerHTML += `${celdas.join("")}`;
}

//console.log(document.querySelectorAll("#tablero td"));
document.querySelectorAll("#tablero td");

//-----------SE GENERAN LAS POSICIONES DONDE SE LOCALIZARÁ UNA MINA------------------------//
arrayRandomPos = new Array(25);
for (let i = 0; i < arrayRandomPos.length; i++) {
  arrayRandomPos[i] = Math.floor(200 * Math.random());
}
//controlar que el random no repita núumeros

//------SE RECORRE EL ARRAY DE POSICIONES Y SE UBICAN LAS MINAS DENTRO DEL TABLERO----------//

for (let valorPos of arrayRandomPos) {
  document.querySelectorAll("#tablero td")[valorPos].style.backgroundColor =
    "red";
}
*/
//--------------SE ANALIZAN LAS PROXIMIDADES--------------------------/
/*for (let i = 0; i < numFilas; i++) {
  for (j = 0; j < numCeldas; j++) {
    isRed = getComputedStyle(tableroCeldas[i][j]).backgroundColor == "red";
    if (!isRed) {
      tableroCeldas[i][j] = 1;
    }
  }
}*/
