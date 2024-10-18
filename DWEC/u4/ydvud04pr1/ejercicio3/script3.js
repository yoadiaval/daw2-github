const formulario = document.getElementById("form");

const pacientesPediatria = [];
const pacientesDerma = [];
const pacientesCardio = [];
const consultas = [pacientesPediatria, pacientesDerma, pacientesCardio];
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    consultas[0].push(formulario.elements[0].value)
    consultas[1].push(formulario.elements[1].value)
    console.log(consultas)
    
})

