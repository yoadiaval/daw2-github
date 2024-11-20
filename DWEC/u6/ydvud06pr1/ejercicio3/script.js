const zonaDibujoTable = document.getElementById("zonadibujo_table");
const paletaTable = document.getElementById("paleta_table");

//--------------------MAQUETAR PALETA DE COLORES-------------------------//
const celsColorPaleta = new Array(6).fill("<td></td>");
paletaTable.innerHTML = `
        <tr>
            ${celsColorPaleta.join("")}    
        </tr>
        <tr>
          <td id="estado_pincel" colspan="6"></td>
        </tr>
`;

//--------------------------MAQUETAR ZONA DE DIBUJO---------------------------------------//
const cels = new Array(30).fill("<td></td>"); //crea un array de 30 posiciones que completa con las celdas de la tabla
//genera 30 filas y dentro de cada una de ellas inserta el array concatenado de las 30 celdas.
for (let index = 0; index < 30; index++) {
  zonaDibujoTable.innerHTML += `<tr>${cels.join("")}</tr>`;
}


//----------------------------GESTIONAR PALETA-----------------------------------//
let activeColor; //almacena el color que esté activo.

document
  .querySelectorAll("#paleta_table tr:nth-child(1) td")
  .forEach((element) => {
    element.addEventListener("click", function () {
      activeColor = getComputedStyle(this).backgroundColor; //se accede al color seleccionado
     
    });
  });


//--------------------------CONTROL CLICK DE ACTIVACION Y DESACTIVACION------------------------// 
let nclick = 0;
document.getElementById("zonadibujo").addEventListener("click", function () { //escucha al evento click dentro de la zona de dibujo
  nclick == 1 ? (nclick = 0) : nclick++; //alterna nclick entre 0 y 1
  console.log(nclick);
});

//------------------------------GESTIONAR ESTADO DEL PINCEL--------------------------------------// 
setInterval(revisarEstadoPincel, 100); //revisa el estado del pincel y lo actualiza cada 100ms

function revisarEstadoPincel() {
  document.getElementById("estado_pincel").innerHTML = `${
    nclick === 0 ? "
    bhO" : "PINCEL ACTIVADO"
  }`;
}


//---------------------------------GESTIONAR ZONA DE DIBUJO----------------------------------------------//
document.querySelectorAll("#zonadibujo_table td").forEach((element) => {
  element.addEventListener("mouseover", function () {
    if (nclick == 1) {
      this.style.backgroundColor = activeColor;
    }
  });
});

