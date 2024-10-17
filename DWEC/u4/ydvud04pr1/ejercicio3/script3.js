const formulario = document.getElementById("form");
const consultas = [[]];

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    consultas[0][0].push(formulario.elements[0].value)
    consultas[0][1].push(formulario.elements[1].value)
    console.log(consultas)
    //console.log(formulario.elements[1].value);
})

//console.log(consultas)