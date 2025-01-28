function ajaxCall(data, method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
  });
}

async function agregar(data) {
  url = "http://localhost/proyectos/APIs/controller/api.php";
  await ajaxCall(data, "POST", url);
  getProductos();
}

async function update(data, method) {
  url = "http://localhost/proyectos/APIs/controller/api.php";
  await ajaxCall(data, method, url);
  getProductos();
}

async function eliminar(cod) {
  url = "http://localhost/proyectos/APIs/controller/api.php";
  data = {
    cod: cod,
  };
  await ajaxCall(data, "DELETE", url);
  getProductos();
}

async function getProducto(cod) {
  url = `http://localhost/proyectos/APIs/controller/api.php/${cod}`;
  producto = await ajaxCall("", "GET", url);
  if (producto) {
    document.getElementById("descripcion").value = producto[0].descripcion;
    document.getElementById("nombre").value = producto[0].nombre;
    document.getElementById("precio").value = producto[0].precio;
  }
}

async function getProductos() {
  url = "http://localhost/proyectos/APIs/controller/api.php";
  const productos = await ajaxCall("", "GET", url);
  if (productos) {
    tbody = document.querySelector("tbody").innerHTML = `
        ${productos
          .map((producto) => {
            /* const baseUrl = window.location.href.split("?")[0];*/
            return `<tr><td>${producto.cod}</td>
                        <td>${producto.descripcion}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.nombre}</td>
                            <td><a onclick="getProducto(${producto.cod})">editar</a><a onclick="eliminar(${producto.cod})">Eliminar</a></td>
                        </tr>`;
          })
          .join("")}
           `;
  }
}

/*CAPTURA DE EVENTOS DE FORMULARIOS*/
document
  .getElementById("formModif")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let data = {};
    modifNombre = document.getElementById("checknombre").checked;
    modifDescription = document.getElementById("checkdescripcion").checked;
    modifPrecio = document.getElementById("checkprecio").checked;

    data["cod"] = document.getElementById("cod").value;
    if (modifPrecio) {
      data["precio"] = document.getElementById("precio").value;
    }
    if (modifNombre) {
      data["nombre"] = document.getElementById("nombre").value;
    }
    if (modifDescription) {
      data["descripcion"] = document.getElementById("descripcion").value;
    }

    if (!modifNombre && !modifDescription && !modifPrecio) {
      console.log("entre");
      alert("No ha selecconado ningún campo para modificar");
      return;
    }
    if (modifNombre && modifDescription && modifPrecio) {
      update(data, "PUT");
    } else {
      update(data, "PATCH");
    }
  });

document
  .getElementById("formAgregar")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    data = {
      descripcion: event.target[1].value,
      precio: event.target[2].value,
      nombre: event.target[3].value,
    };
    this.reset();
    agregar(data);
  });

window.addEventListener("load", getProductos(), false);
