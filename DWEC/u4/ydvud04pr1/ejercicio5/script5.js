class Edificio {
  numPlantas = 0;
  numPuertas = 0;
  propietarios = [];
  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    document.write(
      `Construido nuevo edificio en calle: ${this.calle},nº: ${this.numero}, CP: ${codigoPostal} <br/>`
    );
  }

  agregarPlantasYpuertas(numPlantas, numPuertas = 0) {
    this.numPlantas += numPlantas;
    this.numPuertas += numPuertas;
  }
  setNumero(newNumero) {
    this.numero = newNumero;
  }
  setCalle(newCalle) {
    this.calle = newCalle;
  }
  setCodigoPostal(newCodigoPostal) {
    this.codigoPostal = newCodigoPostal;
  }
  imprimeCalle() {
    return this.calle;
  }
  imprimeNumero() {
    return this.numero;
  }
  imprimeCodigoPostal() {
    return this.codigoPostal;
  }
  agregarPropietario(nombre, planta, puerta) {
    this.propietarios.push({ nombre: nombre, planta: planta, puerta: puerta });
    document.write(
      `${nombre} es ahora propietario de la puerta ${puerta} de la planta ${planta}<br/>`
    );
  }
  imprimePlantas() {
    document.write(
      `<strong>Listado de propietarios del edificio calle ${this.calle} número ${this.numero}</strong><br/>`
    );
    for (let i = 1; i <= this.numPlantas; i++) {
      for (let j = 1; j <= this.numPuertas; j++) {
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

const edificioA = new Edificio("Garcia Prieto", 58, 15706);
const edificioB = new Edificio("Camino Caneiro", 29, 32004);
const edificioC = new Edificio("San Clemente,", "s/n", 15705);

document.write(
  `El código postal del edificio A es: ${edificioA.imprimeCodigoPostal()}<br/>`
);
document.write(`La calle del edificio C es: ${edificioC.imprimeCalle()}<br/>`);
document.write(
  `El edificioB está en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}<br/>`
);

edificioA.agregarPlantasYpuertas(2, 3);

edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

edificioA.imprimePlantas();
edificioA.agregarPlantasYpuertas(1);
edificioA.agregarPropietario("Pedro Meijide", 3, 2);
edificioA.imprimePlantas();
