function obtenerDatos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/proyectos/APIs/api.php");
  // set response format
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    // get JSON response
    const productos = xhr.response;
    tbody = document.querySelector("tbody").innerHTML = `
        ${productos
          .map((producto) => {
            /*elimina los parámetro de la url para que no se dupliquen cada vez que se llame al boton de editar*/
            const baseUrl = window.location.href.split("?")[0];
            return `<tr><td>${producto.cod}</td>
                        <td>${producto.descripcion}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.nombre}</td>
                            <td><a href="${baseUrl}?accion=enviarEditar&cod=${producto.cod}">editar</a><a onclick="eliminar(${producto.cod})">Eliminar</a><td>
                        </tr>`;
          })
          .join("")}
  `;
  };
}

function modificar(data) {
  const cod = data.codigo;
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `http://localhost/proyectos/APIs/api.php/${cod}`, true);
  // Establecer el encabezado Content-Type para JSON
  xhr.setRequestHeader("Content-Type", "application/json");
  // Configurar el tipo de respuesta como JSON
  xhr.responseType = "json";
  // Enviar la solicitud con los datos en formato JSON
  xhr.send(JSON.stringify(data));
  // Manejar la respuesta
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("Respuesta exitosa:", xhr.responseText);
    } else {
      console.error("Error en la solicitud:", xhr.status, xhr.statusText);
    }
  };

  // Manejar errores en la solicitud
  xhr.onerror = () => {
    console.error("Error en la conexión con el servidor");
  };
}

document
  .getElementById("formModifTodo")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    cod = document.getElementById("codigo").value;
    nombre = document.getElementById("nombre").value;
    descripcion = document.getElementById("descripcion").value;
    precio = document.getElementById("precio").value;

    data = {
      cod: cod,
      descripcion: descripcion,
      precio: precio,
      nombre: nombre,
    };

    modificar(data);
  });

document
  .getElementById("formModifParcial")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    cod = document.getElementById("codigo").value;
    nombre = document.getElementById("checknombre").checked
      ? document.getElementById("nombre").value
      : "";
    descripcion = document.getElementById("checkdescripcion").checked
      ? document.getElementById("descripcion").value
      : "";
    precio = document.getElementById("checkprecio").checked
      ? document.getElementById("precio").value
      : ""; 
if (
  document.getElementById("checknombre").checked &&
  document.getElementById("checkdescripcion").checked &&
  document.getElementById("checkprecio").checked
){
  data = {
    cod: cod,
    descripcion: descripcion,
    precio: precio,
    nombre: nombre,
  };
}else{
 

 data = {
   cod: cod,
   descripcion: descripcion,
   precio: precio,
   nombre: nombre,
 };
 let dataCorregido;
 for (let prop in data) {
   if (data[prop] !== "") {
     dataCorregido[prop] = data[prop];
   }
 }
  console.log(dataCorregido);
}
   

   

    modificar(data);
  });

function eliminar($id) {}

window.addEventListener("load", obtenerDatos, false);
