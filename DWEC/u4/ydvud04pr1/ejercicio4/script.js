class Empresa {
  constructor(nombre, direccion, telefono, nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
  }
}

class Cliente {
  constructor(nombre, direccion, telefono, nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
  }
}

class Elemento {
  constructor(descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

class Factura {
  totalFactura = 0;
  constructor(empresa, cliente, detalles, tiva, formaPago) {
    this.empresa = empresa;
    this.cliente = cliente;
    this.detalles = detalles;
    this.iva = tiva;
    this.formaPago = formaPago;
  }
  calculaTotal() {
    this.totalFactura = this.detalles.reduce((total, item) => {
      return total + item.precio * item.cantidad;
    }, 0);
  }
  muestraTotal() {
    this.calculaTotal();
    return this.totalFactura;
  }
  imprimirFactura() {
    //muestro detalles de la empresa
    document.getElementById("empresa").innerHTML = `${this.empresa.nombre}`;
    document.getElementById("detallesEmpresa").innerHTML = `
    <li>Direccion: <span>${this.empresa.direccion}</span></li>
    <li>Teléfono: <span>${this.empresa.telefono}</span></li>
    <li>NIF: <span>${this.empresa.nif}</span></li>
    `;
    //Muestro detalles de los clientes
    document.getElementById("cliente").innerHTML = `${this.cliente.nombre}`;
    document.getElementById("detallesCliente").innerHTML = `
    <li>Direccion: <span>${this.cliente.direccion}</span></li>
    <li>Teléfono: <span>${this.cliente.telefono}</span></li>
    <li>NIF: <span>${this.cliente.nif}</span></li>
    `;
    //Por cada elemento en la lista de detalles agrego una fila
    //en la tabla que lista los detalles de la factura.
    document.querySelector("table").innerHTML += `${this.detalles
      .map((element) => {
        return `<tr>
                    <td>${element.descripcion}</td>
                    <td>${element.precio}</td>
                    <td>${element.cantidad}</td> 
                </tr>`;
      })
      .join("")}
      <tr>
      <td></td>
      <td>Total:</td>
      <td>${this.muestraTotal()}</td>
      </tr>
      `;

    //Info de los totales de la factura
    document.getElementById("InfoTotalesFactura").innerHTML = `
      <ul>
        <li><span>Base Imponible: </span>${this.muestraTotal()}</li>
        <li><span>Importe Total: </span>${
          this.muestraTotal() - (this.muestraTotal() * this.iva) / 100
        }</li>
        <li><span>Iva: </span>${this.iva}%</li>
        <li><span>Forma de pago: </span>${this.formaPago}</li>
      </ul>
      `;
  }
}

//Creación de instancias
const emp1 = new Empresa("Productos varios SA", "Calle 13", "123654", "F-2458");
const cliente = new Cliente("Aitana", "Calle 12", "63462365", "25485J");
const elemento1 = new Elemento("Monitor 32'", 20, 200);
const elemento2 = new Elemento("Mesa escritorio", 10, 200);
const detalles = [elemento1, elemento2];
const factura = new Factura(emp1, cliente, detalles, 20, "crédito");

factura.imprimirFactura();
