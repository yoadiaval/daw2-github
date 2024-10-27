//GESTIONAR EL EVENTO SUBMIT DEL FORMULARIO
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); //previene comportamiento por defecto al enviar formulario
  //Obtiene el input que contiene el color seleccionado.
  const color = [...document.querySelectorAll("input")].find(function (item) {
    return item.id == "color";
  });
  //Modifica el background del body con el color seleccionado en el formulario.
  document.querySelector("body").style.backgroundColor = `${color.value}`;

  //Si el checkbox está marcado, guardo datos en las cookies
  if (document.getElementById("recordar").checked) {
    //almaceno en variables los datos que guardaré en la cookie
    const usuario = document.getElementById("usuario").value;
    const passw = document.getElementById("passw").value;
    const color = document.getElementById("color").value;
    //guardo infp en las cookies por 1 dia
    setCookie("usuario", usuario, 1);
    setCookie("password", passw, 1);
    setCookie("color", color, 1);
  } else {
    //Si el checkbox no está marcado, elimina las cookies
    //se hace poniendo una fecha de expiración pasada.
    setCookie("usuario", "", -1);
    setCookie("password", "", -1);
    setCookie("color", "", -1);
  }
  this.reset();
});

//FUNCION PARA ALMACENAR INFO EN LAS COOKIES
function setCookie(nombre, valor, dias) {

  //defino fecha expiracion: fecha actual más los días en que expirará la cookie 
  const now = new Date();
  
  //sumo al tiempo actual los dias ex que expirará la cookie
  now.setTime(now.getTime() + dias * 24 * 60 * 60 * 1000); //a los ms actuales de la fecha en curso le sumo los dias de expiracion.
  fechaExp = now;
  expiracion = `expires = ${fechaExp.toUTCString()}`;

  document.cookie = `${nombre}=${valor}; ${expiracion}; path=/`;
}

//FUNCION PARA OBTENER LA INFO DE LAS COOKIES
function getCookie(nombre) {
  const name = nombre + "=";
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

//CARGO EN LA PAGINA LOS DATOS ALMACENADOS EN LAS COOKIES
window.onload = function () {
  const usuario = getCookie("usuario");
  const passw = getCookie("password");
  const color = getCookie("color");

  if (usuario) {
    document.getElementById("usuario").value = usuario;
  }
  if (passw) {
    document.getElementById("passw").value = passw;
  }
  if (color) {
    document.getElementById("color").value = color;
  }
};
