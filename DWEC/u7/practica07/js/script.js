const table = document.getElementById("list");
const formulario = document.getElementById("formulario");
const formModificar = document.getElementById("formModificar");

const legend = document.querySelector("legend");
var modificando = false;
var creando = false;

//Obtengo los datos al cargar la página y actualizo el DOM
window.onload = function () {
  getData();
  //oculta los formularios al cargar la página
  [...document.querySelectorAll("#section2, #section3")].forEach((element) => {
    element.classList.add("ocultar");
  });
};

//------------------MANEJO DE EVENTOS EN LA PÁGINA---------------------------------//
//Agrega evento al button que añade empleados
document.getElementById("add").addEventListener("click", function () {
  creando = true;
  legend.innerHTML = "Inserte los datos de nuevo empleado";
  document.getElementById("section1").classList.add("ocultar");
  document.getElementById("section2").classList.remove("ocultar");
});
//Agrega eventos al button cancelar
document.getElementById("cancelar").addEventListener("click", function () {
  //Pongo a false las acciones para evitar que se afecte la lógica de envío de datos del formulario.
  modificando = false;
  creando = false;
  document.getElementById("section1").classList.remove("ocultar");
  document.getElementById("section2").classList.add("ocultar");
});
//function que maneja el evento de cada uno de los buttons de modificar
function prepararModificado(element) {
  var peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function () {
    if (
      peticion.readyState == 4 &&
      (peticion.status === 200 ||
        peticion.status === 201 ||
        peticion.status === 204)
    ) {
      modificando = true;
      //Agrega los valores del empleado seleccionado a los imputs correspondientes
      empleado = JSON.parse(peticion.responseText)[0];
      formulario[1].value = empleado.nombre;
      formulario[2].value = empleado.edad;
      formulario[3].value = empleado.cargo;
      formulario[4].checked = empleado.contratado == 1 ? true : false;
      formulario[5].value = empleado.id;
      //muestro el fomulario de modificacion de empleados
      legend.innerHTML = "Modifique los datos necesarios";
      document.getElementById("section1").classList.add("ocultar");
      document.getElementById("section2").classList.remove("ocultar");
    }
  };
  peticion.open(
    "GET",
    `http://test-api.jtarrega.es/api/empleados/${element.classList[0]}`,
    true
  );
  peticion.setRequestHeader("Content-Type", "application/json");
  peticion.send();
}

//------------------- EVENTO SUBMIT FORMULARIO-------------------------//
//Formulario que agrega y modifica empleados
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  //Recojo la información del formulario
  var datosJson = JSON.stringify({
    nombre: formulario[1].value,
    edad: formulario[2].value,
    cargo: formulario[3].value,
    contratado: formulario[4].checked ? 1 : 0,
    created_at: "",
    updated_at: "",
  });

  //llamo a la función que crea el formulario o a la que lo modifica en 
  //función del estado de "creando" y "modificando".
  switch (true) {
    case creando:
      creando = false;
      actionPost(datosJson); 
      formulario.reset();
      break;
    case modificando:
      console.log(formulario[4]);
      var id = formulario[5].value;
      actionPut(datosJson, id);
      formulario.reset();
      modificando = false;
      break;
    default:
      break;
  }
});

//---------------------------FUNCIONES CRUD---------------------------//
//Obtiene los datos y actualiza el DOM
function getData() {
  var peticion = new XMLHttpRequest();
  //actúa en función del estado de la petición
  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 && peticion.status == 200) {
      document.getElementById("list").innerHTML = `<thead>
                                                     <th>Id</th>
                                                     <th>Nombre</th>
                                                     <th>Edad</th> 
                                                     <th>Cargo</th>
                                                     <th>Contratado</th>
                                                     <th>Acciones</th>
                                                    </thead>`;
      var datosJson = JSON.parse(peticion.responseText);
      empleadosRecibidos = datosJson;
      for (var i = 0; i < empleadosRecibidos.length; i++) {
        var idEmpleado = empleadosRecibidos[i].id;
        var nombreEmpleado = empleadosRecibidos[i].nombre;
        var edadEmpleado = empleadosRecibidos[i].edad;
        var cargoEmpleado = empleadosRecibidos[i].cargo;
        var estadoContratado = empleadosRecibidos[i].contratado;
        document.getElementById("list").innerHTML += `<tr>
                                                        <td>${idEmpleado}</td>
                                                        <td>${nombreEmpleado}</td>
                                                        <td>${edadEmpleado}</td>
                                                        <td>${cargoEmpleado}</td>
                                                        <td>${estadoContratado}</td>
                                                        <td class="acciones"><button class="${idEmpleado}" onclick="prepararModificado(this)">Modificar</button><button onclick="actionDelete(this)" class="${idEmpleado} btnBorrar">Borar</button></td>
                                                      </tr>`;
      }
      document.getElementById("section1").classList.remove("ocultar");
      document.getElementById("section2").classList.add("ocultar");
    }
  };

  // Establezco la comunicación
  peticion.open("GET", "http://test-api.jtarrega.es/api/empleados", true);
  peticion.setRequestHeader("Content-Type", "application/json");
  peticion.send();
}
//Crea nuevo empleado
function actionPost(datos) {
  var peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 && peticion.status == 201) {
      getData();
    }
  };
  peticion.open("POST", "http://test-api.jtarrega.es/api/empleados", true);
  peticion.setRequestHeader("Content-Type", "application/json");
  peticion.send(datos);
}
//Mofifica el empleado
function actionPut(datos, id) {
  var peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 || peticion.status === 201) {
      getData();
    }
  };
  peticion.open(
    "PUT",
    `http://test-api.jtarrega.es/api/empleados/${id}`, //recoge el id en el campo oculto de este formulario
    true
  );
  peticion.setRequestHeader("Content-Type", "application/json");
  peticion.send(datos);
}
//elimina al empleado a partir del id que se pasa en la clase en la clase del elemento que lanza la acción
function actionDelete(element) {

 var peticion = new XMLHttpRequest();
 peticion.onreadystatechange = function () {
   if (peticion.readyState == 4 && (
     peticion.status === 200 ||
     peticion.status === 201 ||
     peticion.status === 204)
   ) {
     getData();
   } 
 };
 peticion.open(
   "DELETE",
   `http://test-api.jtarrega.es/api/empleados/${element.classList[0]}`,
   true
 );
 peticion.setRequestHeader("Content-Type", "application/json");
 peticion.send();

}


//agrega al empleado pasado por parámetro
/*

//--------------------------OTRAS FUNCIONES--------------------------//


//Obtiene la cantidad de elementos de la base de datos para evitar eliminar el último elemento
function obtenerLongitud(){
 var peticion = new XMLHttpRequest();

 peticion.onreadystatechange = function () {
  if (peticion.readyState == 4 ){
    if(peticion.status === 200 || peticion.status === 201){
      return JSON.parse(peticion.responseText).length;
    } else {
      console.error("Error al obtener datos:", peticion.responseText);
      console.log(peticion.status);
    }
  }
 };

 //actúa en función del estado de la petición
 peticion.open("GET", "http://test-api.jtarrega.es/api/empleados", true);
 peticion.setRequestHeader("Content-Type", "application/json");
 peticion.send();
}

//---------------CAPTURA DE EVENTOS DE LOS FORMULARIOS------------------------//


//formulario para modificar empleado
formModificar.addEventListener("submit", function (event) {
  event.preventDefault();
  actionPut();
  this.reset();
});
*/
