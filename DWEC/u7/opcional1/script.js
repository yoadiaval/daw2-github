formNuevoPaciente = document.getElementById("formNuevoPaciente");
btnBorrarTodo = document.getElementById("btn-borrar-todo");

// Event listener para el formulario

formNuevoPaciente.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(this.elements[2].value);
  text = "2024-11-25T12:36";
  arr = text.split("T");
  console.log(arr);
});
