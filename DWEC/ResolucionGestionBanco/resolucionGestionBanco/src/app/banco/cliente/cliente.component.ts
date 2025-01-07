import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente';
import { Operacion } from '../operacion';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  @Input() saldoBanco: number = 0;
  @Output() saldoBancoActualizado = new EventEmitter<number>();
  public numClientes: number = 0;
  public numOperaciones: number = 0;
  public clientes: Cliente[] = [];
  public operaciones: Operacion[] = [];
  public seleccionado: number = 0;


  ngOnInit(): void {
    this.creaCliente('Javier');
    this.creaCliente('Pepe');
    this.creaCliente('Paco');
  }

  creaCliente(nombre: string): void {
    this.numClientes++;
    this.clientes.push(new Cliente(this.numClientes, nombre));
    this.seleccionado = this.clientes.length - 1;
    this.creaOperacion(this.numClientes, "Ingreso por creación delcliente " + this.numClientes + " (" + nombre + ")", this.clientes[this.clientes.length - 1].saldo);
  }
  creaOperacion(ncliente: number, descripcion: string, importe:
    number): void {
    this.numOperaciones++;
    this.operaciones.push(new Operacion(this.numOperaciones,
      ncliente, descripcion, importe));
    this.saldoBanco += importe;
    this.saldoBancoActualizado.emit(this.saldoBanco);
  }
  crea1operacion(): void {
    //la operación es para uno de los clientes que en este momento tenga el array
    let indiceClienteAleatorio = Math.floor(Math.random() *
      this.clientes.length);
    //Es ingreso o pago aleatorio
    let esIngreso = Math.random() < 0.5;
    //Si no es ingreso, el cliente tiene que estar activo para completarse
    if (esIngreso || this.clientes[indiceClienteAleatorio].activo) {
      //El importe es aleatorio
      let importe = Math.random() * 5000;
      let texto = "";
      if (esIngreso) {
        texto = "Ingreso realizado por el cliente "
      } else {
        texto = "Pago realizado por el cliente "
        importe *= (-1)
      }
      texto += this.clientes[indiceClienteAleatorio].ncliente + " ("
        + this.clientes[indiceClienteAleatorio].nombre + ")";
      //llamamos a crea una operación (arriba) con el cliente, textoe importe

      this.creaOperacion(this.clientes[indiceClienteAleatorio].ncliente,
        texto, importe);
      //actualizamos saldo del cliente (el del banco y el evento sehace en operación)
      this.clientes[indiceClienteAleatorio].saldo += importe;
      //Se activa o desactiva el cliente tras la operación
      this.clientes[indiceClienteAleatorio].activo =
        this.clientes[indiceClienteAleatorio].saldo > -10000;
    }
  }
  crea5operaciones(): void {
    for (let i = 0; i < 5; i++) {
    if (this.saldoBanco < 0) {
    break;
    }
    this.crea1operacion();
    }
    }
    crea100operacions(): void {
    for (let i = 0; i < 100; i++) {
    if (this.saldoBanco < 0) {
    break;
    }
    this.crea1operacion();
    }
    }
  actualizarSaldoBanco(saldoBancoActualizado: number) {
    this.saldoBanco = saldoBancoActualizado;
  }
}
