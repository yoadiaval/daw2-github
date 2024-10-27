//coloca la fecha actual en el input tipo fecha que está oculto
const now = new Date();
document
  .getElementById("now")
  .setAttribute(
    "value",
    `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
  );

//Agrega al DOM el valor que señala el input tipo range en dependencia del elemento 
//input que lanza el evento.
function handleChange(element) {
  switch (element.id) {
    case "distPlaya":
      document.getElementById("valueDistPlaya").innerHTML = `${element.value}`;
      break;
    case "metrosMin":
      document.getElementById("valueMetrosMin").innerHTML = `${element.value}`;
      break;
    case "precioMax":
      document.getElementById("valuePrecioMax").innerHTML = `${element.value}`;
      break;
  }
}
