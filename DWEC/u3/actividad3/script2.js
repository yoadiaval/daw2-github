const table = document.querySelector("table");

//FUNCIONES QUE CONTROLAN EL FORMATO DE LOS DATOS QUE SE SOLICITAN
function pedirFechaNac() {
  formatoFecha = /[0-9]{2,}\-[0|1][1-9]\-[0-9]{2,}/;
  do {
    fecha = prompt("inserte la fecha de nacimiento en formato aa-mm-dd");
    //ARRAY CON LOS VALORES DE LAS FECHAS POR SEPARADO PARA CONTROLAR QUE SEAN VALORES VÁLIDOS
    arrFech = fecha.split("-");
    //REALIZA UN TEST AL FORMATO DE LA FECHA
    formatoCorrecto = formatoFecha.test(fecha);
    if (
      !formatoCorrecto ||
      arrFech[1] > 12 ||
      arrFech[1] <= 0 ||
      arrFech[2] > 31 ||
      arrFech[2] <= 0
    ) {
      alert("Ha insertado un formato O valor incorrecto");
    }
  } while (
    !formatoCorrecto ||
    arrFech[1] > 12 ||
    arrFech[1] <= 0 ||
    arrFech[2] > 31 ||
    arrFech[2] <= 0
  );

  return fecha;
}
function pedirDir() {
  formatoDir = /calle\s[a-zA-Z0-9\s]{1,}\sNo\s\d{1,}\spta\s\w{1,}/;
  do {
    dir = prompt("Inserte la dirección");
    formatoCorrecto = formatoDir.test(dir);
    if (!formatoCorrecto) {
      alert("Ha insertado un formato incorrecto");
    }
  } while (!formatoCorrecto);

  return dir;
}
function pedirHijos() {
  do {
    hijos = prompt('Inserte los nombres de los hijos separados por "-"');
  } while (hijos.indexOf("-") == -1);

  return hijos;
}

function pedirPoblación() {
  do {
    formatoPoblacion = /[a-zA-Z\s]{1,}-[0-9]{4}/;
    poblacion = prompt(
      'Inserte la población y el código postal con el siguiente formato "poblacion-codigo postal" '
    );
    formatoCorrecto = formatoPoblacion.test(dir);
  } while (poblacion.indexOf("-") == -1);

  return poblacion;
}

//SOLICITUD DE DATOS
dir = pedirDir();
nombre = prompt("Inserte su nombre");
apellidos = prompt("Inserte sus apellidos");
fechaNac = pedirFechaNac();
poblacion = pedirPoblación();
idiomas = prompt("Inserte los idiomas separados por espacio ");
hijos = pedirHijos();

//CALCULO DE LA EDAD
now = new Date();
nacDate = new Date(fechaNac);
edad = now.getFullYear() - nacDate.getFullYear();

//EXTRAER LOS ELEMENTOS QUE NECESITO DE LA DIRECCION EN UN ARRAY
dirArr = dir.split(" ");
arrItemsDir = [];
pos = -1;
for (let value of dirArr) {
  if (value !== "calle" && value !== "No" && value !== "pta") {
    //VERIFICA SI EXISTE ALGÚN VALOR EN ESA POSICIÓN
    if (arrItemsDir[pos] === undefined) {
      arrItemsDir.push(value);
    } else {
      arrItemsDir[pos] += ` ${value}`;
    }
  } else {
    pos++;
  }
}

//SE CREA UN OBJETO ALMACENANDO LA INFORMACIÓN QUE SE MOSTRARÁ EN LA TABLA
personalInfo = {
  nombre: `${apellidos.toUpperCase()}, ${nombre.toUpperCase()}`,
  edad: edad,
  calle: arrItemsDir[0],
  patio: arrItemsDir[1],
  puerta: arrItemsDir[2],
  "codigo postal": poblacion.split("-")[0],
  poblacion: poblacion.split("-")[1],
  idiomas: idiomas.split(" "),
  "Num. hijos": hijos,
};

//SE RECORRE EL OBJETO personalInfo ACCEDIENDO A SUS PROPIEDADES  Y POR CADA UNA DE ELLAS
// SE CREA UNA FILA EN LA TABLA
for (let value of Object.keys(personalInfo)) {
  //PONE EN MAYUSCULAS LA PRIMERA LETRA DE LA PROPIEDAD
  prop = value.split("")[0].toUpperCase().concat(value.substring(1));

  //EN DEPENDENCIA DE LA PROPIEDAD SE PONE SE DECIDE QUE CONTENIDO TENDRÁN LAS FILAS DE LAS TABLAS.
  switch (value) {
    case "idiomas":
      for (let pos in personalInfo[value]) {
        table.innerHTML += `
                              <tr>
                                <td>${pos == 0 ? value : " "}</td>
                                <td>${personalInfo[value][pos]}</td>
                              </tr>`;
      }
      break;
    case "Num. hijos":
      table.innerHTML += `
                              <tr>
                                <td>${prop}</td>
                                <td>${personalInfo[value]}</td>
                              </tr>
                              <tr>
                                <td>${" "}</td>
                                <td>${
                                  personalInfo[value].split("-").length
                                }</td> 
                              </tr>`;
      break;
    default:
      table.innerHTML += `
                              <tr>
                                <td>${prop}</td>
                                <td>${personalInfo[value]}</td>
                              </tr>`;
      break;
  }
}
