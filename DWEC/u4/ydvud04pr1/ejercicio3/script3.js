const formulario = document.getElementById("form");
const listEsperaPediatria = document.getElementById("listEsperaPediatria");
const listEsperaCardio = document.getElementById("listEsperaCardio");
const listEsperaDerma = document.getElementById("listEsperaDerma");

const btnConsulta = document.querySelectorAll(".btnConsulta");

const proxPediatria = document.getElementById("proxPediatria");
const proxDerma = document.getElementById("proxDerma");
const proxCardio = document.getElementById("proxCardio");

//inicializacion de los arrays
let pacientesPediatria = [];
let pacientesDerma = [];
let pacientesCardio = [];
let doctores = ["Ramiro Duarte", "Edgar Muñoz", "Esteban Carrillo"];
let consultas = [pacientesPediatria, pacientesDerma, pacientesCardio];

//se muestran los doctores para cada consulta
document.getElementById("doctorPediatria").innerHTML = `Dr. ${doctores[0]}`;
document.getElementById("doctorDerma").innerHTML = `Dr. ${doctores[1]}`;
document.getElementById("doctorCardio").innerHTML = `Dr. ${doctores[2]}`;

//Se implementa un escuchador para el submit del
//formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  //Se captura el valor que tiene la consulta que
  //se seleccionó en el formulario, en función de
  //esto se actualiza la lista de pacientes en una
  //consulta u otra y actualizo la informacion en
  //pantalla .
  switch (formulario.elements[1].value) {
    case "1":
      consultas[0].push(formulario.elements[0].value);
      updateInfo(listEsperaPediatria, 0);
      break;
    case "2":
      consultas[1].push(formulario.elements[0].value);
      updateInfo(listEsperaDerma, 1);
      break;
    case "3":
      consultas[2].push(formulario.elements[0].value);
      updateInfo(listEsperaCardio, 2);
      break;
    default:
      alert("Debe seleccionar una consulta para enviar sus datos.");
  }
  formulario.reset();
});

//por cada elemento del boton de consulta agrego un escuchador "click"
//en dependencia del boton seleccionado llamo a la funcion updateProx()
//para que muestre en pantalla al paciente llamado y lo elimine de la lista
//de espera.
btnConsulta.forEach((element) => {
  element.addEventListener("click", function () {
    switch (element.attributes.id.nodeValue) {
      case "btn-pediatria":
        updateProx(proxPediatria, 0, listEsperaPediatria);
        break;
      case "btn-derma":
        updateProx(proxDerma, 1, listEsperaDerma);
        break;
      case "btn-cardio":
        updateProx(proxCardio, 2, listEsperaCardio);
        break;
    }
  });
});

//Actualiza el listado de  pacientes en espera,
//se pasa por parámetro el elemento del DOM
//que tiene la lista y el array que contiene la
//lista de los  pacientes de la consulta en cuestion.
function updateInfo(listaPacientes, consulta) {
  listaPacientes.innerHTML = `<ul>${consultas[consulta]
    .map((element) => {
      return `<li>${element}</li>`;
    })
    .join("")}</ul>`;
}

//funcion que muestra el proximo paciente
//a ser llamado.
//recibe por parámetro la posicion del DOM,
//la posicion de la consulta en el array de consultas
//la listaPacientes de pacientes correspondiente a
//esa consulta
function updateProx(posDOM, consulta, listaPacientes) {
  paciente = consultas[consulta].shift();

  if (paciente != undefined) {
    posDOM.innerHTML = `${paciente}`;
    updateInfo(listaPacientes, consulta);
  } else {
    listaPacientes.innerHTML = "No hay pacientes para llamar";
  }
}
