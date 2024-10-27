function validacion(element) {
  //Se identifica el elemento que lanzó el evento y en función de esto
  //se asigna el format la expresión regular.
  switch (element.id) {
    case "codPostal":
      format = /[1-9]\d{4}/;
      break;
    case "telf":
      format = /\([1-9]\d{2}\)\s\d{3}-\d{3}$/;
      break;
    case "movil":
      format = /6\d{2}-\d{3}-\d{3}$/;
      break;
    case "dni":
      format = /[1-9]\d.\d{3}.\d{3}-[A-Z]$/;
      break;
    case "cuenta":
      format = /\d{4}-\d{4}-\d{2}-\d{10}$/;
      break;
    case "cuota":
      format = /\d{1,}\.\d{2}$/;
  }
 
  //En función de la expresion regular determina si el
  //formato del valor insertado es correcto o no.
  if (!format.test(element.value)) {
    element.setCustomValidity("Formato Incorrecto");
  } else {
    element.setCustomValidity("");
  }
}

