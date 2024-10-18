const formulario = document.getElementById("form");
const listEsperaPediatria = document.getElementById("listEsperaPediatria")
const listEsperaCardio = document.getElementById("listEsperaCardio")
const listEsperaDerma = document.getElementById("listEsperaDerma")

let pacientesPediatria = [];
let pacientesDerma = [];
let pacientesCardio = [];
let consultas = [pacientesPediatria, pacientesDerma, pacientesCardio];

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    consultas[0].push(formulario.elements[0].value);
    consultas[1].push(formulario.elements[1].value);   
})

consultas[0].forEach(element => {
    listEsperaPediatria.innerHTML += `
    <li>${element}</li>
    `;
});

consultas[1].forEach(element => {
    listEsperaDerma.innerHTML += `
    <li>${element}</li>`;
})

cardio[2].forEach(element => {
    listEsperaCardio.innerHTML += `
    <li>${element}</li>`;
})
