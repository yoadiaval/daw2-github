const table = document.getElementById("list");
const formulario = document.getElementById("formulario");
const formModificar = document.getElementById("formModificar");

//Obtengo los datos al cargar la página
window.onload = function () {
  getData();
  //oculta los formularios al cargar la página
  [...document.querySelectorAll("#section2, #section3")].forEach((element) => {
    element.classList.add("ocultar");
  });
};


//-------------------LÓGICA OCULTAR Y MOSTAR SECCIONES--------------------// 
document.getElementById("add").addEventListener("click", function () {
  document.getElementById("section1").classList.add("ocultar");
  document.getElementById("section2").classList.remove("ocultar");
});

document.getElementById("cancelar1").addEventListener("click", function () {
  document.getElementById("section2").classList.add("ocultar");
  document.getElementById("section1").classList.remove("ocultar");
});

document.getElementById("cancelar2").addEventListener("click", function () {
  document.getElementById("section3").classList.add("ocultar");
  document.getElementById("section1").classList.remove("ocultar");
});

//------------------------FUNCIONES CRUD------------------------------//
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
                                                        <td class="acciones"><button class="${idEmpleado}" onclick="modificarEmpleado(this)">Modificar</button><button onclick="actionDelete(this)" class="${idEmpleado} btnBorrar">Borar</button></td>
                                                      </tr>`;
      }
    }
  };

  // Establezco la comunicación
  peticion.open("GET", "http://test-api.jtarrega.es/api/empleados", true);
  peticion.setRequestHeader("Content-Type", "application/json");
  peticion.send();
}
//agrega al empleado pasado por parámetro
function actionPost(nuevoEmpleado) {
  var peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 && peticion.status == 201) {
      console.log("Empleado agregado exitosamente");
      getData();
    }
  };
  peticion.open("POST", "http://test-api.jtarrega.es/api/empleados", true);
  peticion.setRequestHeader("Content-Type", "application/json");
  peticion.send(nuevoEmpleado);

  
}
//Mofifica el empleado a partir de los datos recogidos del formModificar
function actionPut() {
  var peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 || peticion.status === 201) {     
      getData();
      document.getElementById("section3").classList.add("ocultar");
      document.getElementById("section1").classList.remove("ocultar");
    }
  };
  peticion.open(
    "PUT",
    `http://test-api.jtarrega.es/api/empleados/${formModificar[5].value}`, //recoge el id en el campo oculto de este formulario
    true
  );
  peticion.setRequestHeader("Content-Type", "application/json");
  var datosJson = JSON.stringify({
    nombre: formModificar[1].value,
    edad: formModificar[2].value,
    cargo: formModificar[3].value,
    contratado: formModificar[4].checked ? 1 : 0,
    created_at: "",
    updated_at: "",
  });

  peticion.send(datosJson);
  
}
//elimina al empleado a partir del id que se pasa en la clase en la clase del elemento que lanza la accion
function actionDelete(element) {

 var peticion = new XMLHttpRequest();
 peticion.onreadystatechange = function () {
   if (peticion.readyState == 4 && (
     peticion.status === 200 ||
     peticion.status === 201 ||
     peticion.status === 204)
   ) {
     console.log("Empleado eliminado exitosamente");
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

//--------------------------OTRAS FUNCIONES--------------------------//
function modificarEmpleado(element) {
  var peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function () {
    if (peticion.readyState == 4 && (
      peticion.status === 200 ||
      peticion.status === 201 ||
      peticion.status === 204)
    ) {
      //Agrega los valores del empleado seleccionado a los imputs correspondientes
      empleado = JSON.parse(peticion.responseText)[0];
      formModificar[1].value = empleado.nombre;
      formModificar[2].value = empleado.edad;
      formModificar[3].value = empleado.cargo;
      formModificar[4].checked = empleado.contratado == 1 ? true : false;
      formModificar[5].value = empleado.id;
      //muestro el fomulario de modificacion de empleados
      document.getElementById("section1").classList.add("ocultar");
      document.getElementById("section3").classList.remove("ocultar");
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
//Formulario nuevo empleado
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  var datosJson = JSON.stringify({
    nombre: formulario[1].value,
    edad: formulario[2].value,
    cargo: formulario[3].value,
    contratado: formulario[4].checked ? 1 : 0,
    created_at: "",
    updated_at: "",
  });
  actionPost(datosJson);
  formulario.reset();
});

//formulario para modificar empleado
formModificar.addEventListener("submit", function (event) {
  event.preventDefault();
  actionPut();
  this.reset();
});
