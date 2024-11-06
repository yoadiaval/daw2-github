const editorialList = document.getElementById("editorialList"); //accede al select donde se listarán todas las editoriales.
const editorial = document.getElementById("editorial"); //accede al input donde se inserta la editorial.
const editoriales = [];
const direcciones = [
  "Avenida de los Sueños 456",
  "Pasaje Imaginario 202",
  "Boulevard del Misterio 101",
  "Calle Sin Nombre 7",
]; //aray de direcciones ficticias

//----------------------ACTUALIZAR EL LISTADO DE EDITORIALES EN EL ELEMENTO SELECT-------------------------------------------//
document
  .getElementById("addEditorial") //accede  al button que añade editoriales
  //se escucha al evento "click"
  .addEventListener("click", function (event) {
    
    event.preventDefault(); //evita que se recargue la página al ejecutar el código
    if (editorial.value !== "") {
      //comprueba que no sea una cadena vacía antes de insertar un elemento
      console.log(editorial.value )
      editoriales.push(editorial.value); //agrega el valor insertado en el input de id editorial
      editorial.value = ""; //se le pasa una cadena vacía a value para que limpie el imput previo a insertar otro elemento.
    }
    //Se actualiza el listado de editoriales recorriendo el array de editoriales y con la función .map(), por cada elemento
    //del array se agrega un elemento "option", se utiliza join para juntar los elementos del array que devuelve map().
    document.getElementById("editorialList").innerHTML = `
    ${editoriales
      .map((element, indice) => {
        return `<option value="${indice}">${element}</option>`;
      })
      .join("")}
    `;
  });

//---------------------------------MOSTRAR U OCUELTAR UBICACIONES----------------------------------------------------//
let contPosDirecciones = 0; //variable que controla hasta que posicion del arreglo de direcciones mostrar en pantalla

document.getElementById("mas").addEventListener("click", function (event) {
  event.preventDefault();

  contPosDirecciones == direcciones.length - 1
    ? (contPosDirecciones = direcciones.length - 1)
    : contPosDirecciones++; //controla que contPosDirecciones no tome valores más allá de la máxima posición del array
  mostrarHastaPos(); //función que actualiza en pantalla las diferentes ubicaciones hasta contPosDirecciones.
});

//función que se ejecuta con el button "+"
document.getElementById("menos").addEventListener("click", function (event) {
  event.preventDefault();
  contPosDirecciones == 0 ? (contPosDirecciones = 0) : contPosDirecciones--; //controla que contPosDirecciones no tome valores más allá de la mínima posición del array
  mostrarHastaPos();
});

//función que se ejecuta con el button "-"
function mostrarHastaPos() {
  //por cada elemento del sibarray del array de direcciones se agrega un elemento option al HTML, con sus respectivos valores:
  document.getElementById("direccion").innerHTML = `${direcciones
    .slice(0, contPosDirecciones) //obtiene solo la parte que nos interesa del array de direcciones.
    .map((element) => {
      return `<li>${element}</li>`;
    })
    .join("")}`;
}
