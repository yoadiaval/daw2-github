
        const toTop = (() => {
          let button = document.getElementById("volver");
          /*si se detecta que la página se ha desplazado más de 200px hacia abajo, se añade la clase "is-visible" de lo contrario se remueve*/ 
          window.onscroll = () => {
            /*
            Dependiendo del resultado de la condición, 
            se utiliza classList.add() o classList.remove() 
            para manipular las clases del elemento button
            */ 
            button.classList[
                (document.documentElement.scrollTop > 200) ? "add" : "remove"
              ]("is-visible")
          }
       
        })();
    