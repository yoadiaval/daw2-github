window.onload = function () {
  actualizarDom();
};
document
  .getElementById("introData")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    marca = this.elements[0].value;
    modelo = this.elements[1].value;
    precio = this.elements[2].value;
    color = this.elements[3].value;
    matricula = this.elements[4].value;
    datosJson = JSON.stringify({
      marca: marca,
      modelo: modelo,
      precio: precio,
      color: color,
    });
    localStorage[matricula] = datosJson;
   /* console.log(
      `Marca: ${marca}, Modelo: ${modelo}, Precio: ${precio}, Color: ${color}`
    );*/
  });

function actualizarDom() {
  document.getElementById("list").innerHTML = `
    <tr>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Precio</th>
        <th>Color</th>
    </tr>
    `;

  for (let i = 1; i <= localStorage.length - 1; i++) {
    console.log(localStorage[localStorage.key(i)]);
  }
}
