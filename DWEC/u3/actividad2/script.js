libros = [
  {
    titulo: "Access para windows",
    author: "Charles Siegel",
    editorial: "Anya",
    tema: "nformática",
    isbn: "84-7614-759-7",
    paginas: "450",
    precio: 45.67,
  },
  {
    titulo: "Salud",
    author: "Eduardo Almansa",
    editorial: "Deusto",
    tema: "Medicina",
    isbn: "24-3547-590-1",
    paginas: "153",
    precio: 45.67,
  },
  {
    titulo: "Redes de computadoras",
    author: "luis Cárcel",
    editorial: "Paraninfo",
    tema: "Informática",
    isbn: "47-8829-435-7",
    paginas: "215",
    precio: 32.86,
  },
];

do {
  var posLibro = parseInt(
    prompt("Inserte la posicion del libro que desea buscar: ")
  );
  if (posLibro > 3 || posLibro <= 0) {
    alert("Debe insertar una posicion válida entre 1 y 3");
  }
} while (posLibro > 3 || posLibro <= 0);
const contentTable = document.getElementById("table");

Object.entries(libros[posLibro])(([key, value]) => {
  contentTable.innerHTML += `
  <tr>
    <th>${key}</th>
    <td>${value}</td>
  </tr>`;
});

/*contentTable.innerHTML = `
       <tr>
        <th>Título</th>
        <td>${libros[posLibro - 1].titulo}</td>
      </tr>
      <tr>
        <th>Autor</th>
        <td>${libros[posLibro - 1].author}</td>
      </tr>
      <tr>
        <th>Editorial</th>
        <td>${libros[posLibro - 1].editorial}</td>
      </tr>
      <tr>
        <th>Tema</th>
        <td>${libros[posLibro - 1].tema}</td>
      </tr>
      <tr>
        <th>ISBN</th>
        <td>${libros[posLibro - 1].isbn}</td>
      </tr>
      <tr>
        <th>Precio</th>
        <td>${libros[posLibro - 1].precio}</td>
      </tr>
      `;*/
