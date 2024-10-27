//almacena en un array todos los elementos de tipo input, select y textarea
const inputsPage = document.querySelectorAll("input, select, textarea");

//asigna color de fondo a los elementos que son requeridos
for (let i = 0; i < inputsPage.length; i++) {
  if (inputsPage[i].hasAttribute("required")) {
    inputsPage[i].style.backgroundColor = "yellow";
  } else {
    inputsPage[i].style.backgroundColor = "#c9c9c9";
  }
}

//valida los elementos que contengan
function validacion(element) {
  //verifica que sea un select elemento y que se haya seleccionado un valor
  //distinto de cero
  isSelectValid = element.value == "0" && element.tagName == "SELECT";
  console.log(element.tagName);
  if (
    element.hasAttribute("required") &&
    (element.value == "" || isSelectValid)
  ) {
    element.style.backgroundColor = "orange";
  } else {
    element.style.backgroundColor = "yellow";
  }
}
