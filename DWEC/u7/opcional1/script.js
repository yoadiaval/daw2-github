formNuevoPaciente = document.getElementById("formNuevoPaciente");
btnBorrarTodo = document.getElementById("btn-borrar-todo");
listaTable = document.getElementById("lista-pacientes-editar");

// Event listener para el formulario
window.onload = function(){
  listarpacientes();
}

//captura del formulario.
formNuevoPaciente.addEventListener("submit", function (event) {
  event.preventDefault();
  dateTime = this.elements[2].value.split("T");
  date =  dateTime[0];
  hora = dateTime[1];
  datosJson = JSON.stringify(
    {
      nombre: this.elements[0].value,
      apellidos: this.elements[1].value,
      fecha: date,
      hora: hora
    }
  );

   sessionStorage.setItem(this.elements[0].value,datosJson); //la clave es el  nombre de la persona
   this.reset();
   listarpacientes();
});

//borrado del sessionStorage
btnBorrarTodo.addEventListener("click", function (event) {
  sessionStorage.clear();
  listarpacientes();
});

//listar pacientes introducidos
function listarpacientes(){
  
    listaTable.innerHTML = `<tr> 
    <td>Nombre</td>
    <td>Apellidos</td>
    <td>Fecha</td>
    <td>Hora</td>
</tr>
`;
for (var i = 1; i <= sessionStorage.length; i++) {
paciente = sessionStorage.key(i);
pacienteObj = JSON.parse(sessionStorage[paciente]);

listaTable.innerHTML += `<tr>
<td>${pacienteObj.nombre}</td>
<td>${pacienteObj.apellidos}</td>
<td>${pacienteObj.fecha}</td>
<td>${pacienteObj.hora}</td> 
</tr>`;
}

  
  
}
