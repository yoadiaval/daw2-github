

/*funcion que realiza la llamada ajax dependiendo de los parámetros de entrada
method: tipo de metodo: POST, DELETE, GET en este caso,
url: la url a la que le le hará la llamada
esHtml: true si la respuesta es una vista, false si es JSON
data: objeto con los datos para la consulta, (opcional)
*/
function callAjax(method, url, esHtml, data = "") {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send(JSON.stringify(data));
        xhr.onload = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                if (esHtml) {
                    document.getElementById("matriculas-lista").innerHTML = `${xhr.response}`;
                }
                resolve(xhr.responseText);
            }
        }
    })
}

function cargarDatos() {
    cargarAlumnos();
    cargarAsignaturas();
    cargarMatriculas();
}

async function cargarAlumnos() {
    url = "http://localhost:8080/examen3/controller/api.php/1";
    alumnos = JSON.parse(await callAjax("GET", url, false));
    document.getElementById("alumno").innerHTML = 
    alumnos.map((alumno)=>{
            return `<option value="${alumno.nia}">${alumno.nombre}</option>`
        }).join("");
    ;



}
async function cargarAsignaturas() {
    url = "http://localhost:8080/examen3/controller/api.php/2";
    asignaturas = JSON.parse(await callAjax("GET", url, false));
    document.getElementById("asignatura").innerHTML = 
    asignaturas.map((asignatura)=>{
            return `<option value="${asignatura.codigo}">${asignatura.nombre}</option>`
        }).join("");
    ;

}
/*Este metodo no lo probé por falta de tiempo por si no funciona bien*/
async function matricular(){
   const data = {
        nia: document.getElementById("alumno").value,
        codigo: document.getElementById("asignatura").value,
        anyo: "",
    }
    url= "http://localhost:8080/examen3/controller/api.php/3"
    await callAjax("POST", url, false, data );
    getMatriculas(); 
}

async function cargarMatriculas() {
    url = "http://localhost:8080/examen3/controller/api.php/3";
    await callAjax("GET", url, true);


}

async function eliminarMatricula(cod) {

    url = "http://localhost:8080/examen3/controller/api.php/3";
    data = {
        codigo: cod
    }
    await callAjax("DELETE", url, false, data);
    cargarMatriculas();
}

window.addEventListener("load", cargarDatos(), false);