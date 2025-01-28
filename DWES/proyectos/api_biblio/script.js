function ajaxCall(method, url, data = "") {
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

async function loadLibros() {
  url = "http://localhost/proyectos/api_biblio/controller/api.php";
  libros = await ajaxCall("GET", url);
  document.querySelector("tbody").innerHTML = `
                                                ${libros
                                                  .map((libro) => {
                                                    return `<tr>
                                                            <td>${libro.id}</td>
                                                            <td>${libro.titulo}</td>
                                                            <td>${libro.autor}</td>
                                                            <td>${libro.genero}</td>
                                                            <td><button onclick="enviarEditar(${libro.id})">Editar</button><button onclick="eliminar(${libro.id})">Eliminar</button></td>
                                                          </tr>`;
                                                  })
                                                  .join("")}
  
                                              `;
}

async function getLibro(id) {
  url = `http://localhost/proyectos/api_biblio/controller/api.php/${id}`;
  libro = await ajaxCall("GET", url);
  return libro;
}

async function enviarEditar(id) {
  libro = await getLibro(id);
  document.getElementById("titulo").value = libro[0].titulo;
  document.getElementById("autor").value = libro[0].autor;
  document.getElementById("genero").value = libro[0].genero;
  document.getElementById("id").value = libro[0].id;
}

async function editar(data) {
  url = `http://localhost/proyectos/api_biblio/controller/api.php`;
  await ajaxCall("PUT", url, data);
  loadLibros();
}

async function eliminar(id) {
  url = `http://localhost/proyectos/api_biblio/controller/api.php`;
  data = {
    id: id,
  };
  await ajaxCall("DELETE", url, data);
  loadLibros();
}
window.addEventListener("load", loadLibros(), false);
document
  .getElementById("formEdit")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    data = {
      id: event.target[1].value,
      titulo: event.target[2].value,
      autor: event.target[3].value,
      genero: event.target[4].value,
    };
    editar(data);
    this.reset();
  });
