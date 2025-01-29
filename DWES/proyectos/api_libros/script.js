function ajaxCall(method, url, data =""){
   /* document.querySelector("tbody").innerHTML = 
    ` <tr>
             <td colspan="4">Hay datos para mostrar</td>
         </tr>`*/
     return new Promise((resolve,reject)=>{
       const xhr = new XMLHttpRequest();
       xhr.open(method, url, true);
       xhr.setRequestHeader("Content-Type", "text/html");
       xhr.responseType = "html";
       xhr.send();
       xhr.onload = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            document.querySelector("tbody").innerHTML = `${xhr.responseText}`;
            resolve(xhr.responseText); 
        } else {
            reject(new Error('Error al realizar la solicitud: ' + xhr.statusText)); 
        }
    };
    }); 
   }

    function cargarDatos(){
    url="http://localhost:8080/api_libros/controller/api.php";
     ajaxCall("GET", url);

   }

   window.addEventListener("load", cargarDatos(), false);