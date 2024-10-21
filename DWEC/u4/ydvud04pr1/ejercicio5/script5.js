const body = document.querySelector("body") 

class Edificio {
  numPlantas = 0;
  numPuertas = 0;
  propietarios = []; //array para almacenar los propietarios que se vayan añadiendo. 
  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    document.write(
      `Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${codigoPostal} <br/>`
    );
  }

  agregarPlantasYpuertas(numPlantas, numPuertas = 0) {
    this.numPlantas += numPlantas;
    this.numPuertas += numPuertas;
  }

   
  //Métodos para modificación de propiedades
  setNumero(newNumero) {
    this.numero = newNumero;
  }
  setCalle(newCalle) {
    this.calle = newCalle;
  }
  setCodigoPostal(newCodigoPostal) {
    this.codigoPostal = newCodigoPostal;
  }


//Métodos que acceden a las propiedades para mostrarlas 
  imprimeCalle() {
    return this.calle;
  }
  imprimeNumero() {
    return this.numero;
  }
  imprimeCodigoPostal() {
    return this.codigoPostal;
  }

  //Método que agrega propietario
  agregarPropietario(nombre, planta, puerta) {
    //Por cada propietario agregado se crea un objeto que se añade al array de propietarios y luego se muestra la info correspondiente
    this.propietarios.push({ nombre: nombre, planta: planta, puerta: puerta });
    document.write(
      `${nombre} es ahora propietario de la puerta ${puerta} de la planta ${planta}<br/>`
    );
  }

  //Método que imprime los pisos con sus propietarios, tenga o no tenga propietarios.
  imprimePlantas() {
    document.write(
      `<strong>Listado de propietarios del edificio calle ${this.calle} número ${this.numero}</strong><br/>`
    );
    //se recorren las plantas con i y las puertas por planta con j.
    for (let i = 1; i <= this.numPlantas; i++) {
      for (let j = 1; j <= this.numPuertas; j++) {
        //Se busca y se retorna de la lista de propietarios al propietario cuya planta coincida con "i"
        //y cuya puerta coincida con "j", si lo encuentra lo muestra, si no lo encuentra (undefined),
        //no muestra nada.
        const propietario = this.propietarios.find(
          (propietario) => propietario.puerta == j && propietario.planta == i
        );

        document.write(
          `-Propietario del piso ${j} de la planta ${i}: ${
            propietario !== undefined ? propietario.nombre : " "
          }<br/>`
        );
      }
    }
  }
}

document.write(`<h1>EJERCICIO 5</h1>`)

//creacion de instancias de edificios
const edificioA = new Edificio("Garcia Prieto", 58, 15706);
const edificioB = new Edificio("Camino Caneiro", 29, 32004);
const edificioC = new Edificio("San Clemente,", "s/n", 15705);

//se muestran datos del edificio A
document.write(
  `El código postal del edificio A es: ${edificioA.imprimeCodigoPostal()}<br/>`
);
document.write(`La calle del edificio C es: ${edificioC.imprimeCalle()}<br/>`);
document.write(
  `El edificioB está en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}<br/>`
);

//se agregan más plantas y puertas al adificio
edificioA.agregarPlantasYpuertas(2, 3);

//Se agregan propietarios
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

//Se muestra info de las plantas con sus propietarios 
edificioA.imprimePlantas();

//Se añade una planta más, se conserva la cantidad de puertas por plantas. 
edificioA.agregarPlantasYpuertas(1);

//Se agrega nuevo propietario
edificioA.agregarPropietario("Pedro Meijide", 3, 2);

//Se muestra info de las plantas con sus propietarios 
edificioA.imprimePlantas();
