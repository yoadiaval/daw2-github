function ajaxCall(method, url, data =""){
     return new Promise((resolve,reject)=>{
       const xhr = new XMLHttpRequest();
       xhr.open(method, url, true);
       /*xhr.setRequestHeader("Content-Type", "text/html");
       xhr.responseType = "html";*/
       xhr.send();
       xhr.onload = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            document.querySelector("tbody").innerHTML = `${xhr.responseText}`;
            resolve(xhr.responseText); 
        } 
    };
    }); 
   }

    function cargarDatos(){
    url="http://localhost:8080/api_libros/controller/api.php";
     ajaxCall("GET", url);
   }

  

   window.addEventListener("load", cargarDatos(), false);