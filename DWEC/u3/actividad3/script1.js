var ventana;

function abrirVentana() {
  ventana = window.open("", "", "width=900,height=900 noResize ");

  ventana.focus();

  ventana.document.write(`
        <h3>Ejemplo de ventana nueva</h3>
        URL Completa: ${window.location.href} <br/>
        Protocolo utilizado: ${window.location.protocol} <br/>
        Nombre en código del navegador: ${navigator.appCodeName} <br/>
        `);
  if (ventana.navigator.javaEnabled()) {
    ventana.document.write("Java SI disponible en esta ventana");
  } else {
    ventana.document.write("Java NO disponible en esta ventana");
  }
  ventana.document.write(`
        <iframe src="https://www.wikipedia.org/" width="800" height="600"></iframe>
        `);
}

const intervalo = setInterval(() => {
  if (ventana.closed) {
    clearInterval(intervalo);

    datos = document.getElementById("datos");
    nombre = prompt("Introduzca su nombre y apellidos");
    //PIDE Y CONTROLA QUE SE INSERTE UN VALOR VÁLIDO PARA EL DÍA
    do {
      diaNac = parseInt(prompt("Introduzca día de nacimiento"));
      if (isNaN(diaNac) || diaNac < 0 || diaNac > 31) {
        alert("Inserte un valor válido");
      }
    } while (isNaN(diaNac) || diaNac < 0 || diaNac > 31);

    //PIDE Y CONTROLA QUE SE INSERTE UN VALOR VÁLIDO PARA EL MES
    do {
      medNac = parseInt(prompt("Introduzca mes de nacimiento"));
      if (isNaN(medNac) || medNac < 0 || medNac > 12) {
        alert("Inserte un valor válido");
      }
    } while (isNaN(medNac) && medNac < 0);

    //PIDE UY CONTROLA QUE SE INSERTE UN VALOR VÁLIDO PARA EL AÑO
    do {
      anioNac = parseInt(prompt("Introduzca año de nacimiento"));
      if (isNaN(anioNac) || anioNac < 0) {
        alert("Inserte un valor válido");
      }
    } while (isNaN(medNac) && medNac < 0);

    fechaNac = new Date(anioNac, medNac, diaNac);

    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    now = new Date();

    //EL if CONTROLA QUE NINGUNO DE LOS DATOS SEA null
    //PARA PODER OPERAR CON ELLOS CORRECTAMENTE.
    if (nombre && diaNac && medNac && anioNac) {
      datos.innerHTML = `
        <h1>TAREADWEC03</h1>
        <p>Buenos días: ${nombre}</p>
         <p>Tu nombre tiene: ${nombre.length} caracteres, incluidos espacios</p>
         
        <p>La primera letra "A" de tu nombre ${
          nombre.indexOf("a") != -1
            ? `está en la posicón:${nombre.indexOf("a")}`
            : `no está contenida en él`
        } </p>
         <p>La última letra A de tu nombre  ${
           nombre.lastIndexOf("a") != -1
             ? `está en la posicón:${nombre.lastIndexOf("a")}`
             : `no está contenida en tu nombre`
         }</p>
         <p>Tu nombre menos las tres primeras letras es: ${nombre.substring(
           3
         )}</p>
         <p>Tu nombre todo en mayúsculas es: ${nombre.toUpperCase()}</p>
             <p>Tu edad es: ${now.getFullYear() - fechaNac.getFullYear()}</p>
             <p>Naciste un feliz ${fechaNac.getDate()} de ${
        meses[fechaNac.getMonth() - 1]
      } del año ${anioNac}</p>
         <p>El coseno de 180 es: ${Math.cos(Math.PI)}</p>
         <p>El número mayor de (34,67,23,75,35,19) es: ${Math.max(
           34,
           67,
           23,
           75,
           35,
           19
         )}</p>
         <p>Ejemplo de número al azar: ${Math.random()}</p>
             `;
    }
  }
}, 500);
