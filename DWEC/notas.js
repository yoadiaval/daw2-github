//CREACION DE CLASES
class NombreClase{
static totalInstancias = 0;
    construct(prop1){
     this.prop1  = prop1;
     totalInstancias++;
    }
    static getTotalInstancias(){}
}

class NombreHereda extends NombreClase{
    cosntructor(prop, prop1){
        super(prop1);
        this.prop = prop;

    }
}

//COKKIES

function setCookie(nombre, valor,dias){
    now = new Date();
    dateExp = now.setTime(now.getTime() + dias*24*60*60*1000);
    dateExtUTC = dateExp.toUTCString();
    document.cokkie(`${nombre}=${valor};expires=$${fechaExpUTC}; path = /}`);
}

function getCokkies(nombre){
    const name = nombre +"=";
    const cookies = document.cookie.split(";"); //separa el string cookies en un array, divisor: ";"
    for (let cookie of cookies) {
        cookie = cookie.trim();  // eliminamos espacios en blanco
        if(cookie.indexOf(name)===0){
            return cookie.substring(name.length, cookie.length);
        }
    }

}


//expresiones Ajax
function PeticionAjax(){
    const peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function (){
    if(peticion.readyState === 4 && peticion.status === 200){
        console.log(peticion.responseText);
    }
    peticion.open("get,port,put,delete","url",true);
    peticion.send();
    }
}

function peticionA(){
   const peticion = new XMLHttpRequest();
   peticion.onreadystatechange = function(){
    if(peticion.readyState ===4 && peticion.status == 200){}
console.log(peticion.responseText)
   }
   peticion.open("","url", true);
   peticion.send();
}

function crearcookie(nombre, valor, dias){
    now = new Date();
    now.setTime(now.getTime() +dias *24*60*60*1000);
    fechaExp = now.ToUTCString();
    document.cookie = `${nombre}=${valor}; expires = ${fechaexp}; path = /`;
}

function obtenerCookie(nombre){
    const name = nombre +"=";
    const cookies = document.cookie.split(";");
    for(let cookie of cookies){
        cookie.trim(); 
        if(cookie.indexOf(name) === 0){
            return cookie.substring(name.length, cookie.length)
        }
    }
    return "";
}