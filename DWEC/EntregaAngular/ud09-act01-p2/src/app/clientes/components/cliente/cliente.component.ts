import { Component, ViewChild } from '@angular/core';
import { Cliente } from '../../cliente';
import { ListaOperacionesComponent } from '../lista-operaciones/lista-operaciones.component';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  @ViewChild('listOperaciones') listOperaciones!: ListaOperacionesComponent;
  public seleccionado: number = 0;
  public clientes: Cliente[] = [
    new Cliente(1262, 'Pedro', true, 5000),
    new Cliente(1254, 'Luis', true, 5000),
    new Cliente(3654, 'Juan', true, 5000),
  ];
  public generarNumeroAleatorio(): number {
    let randomNum = Math.floor(Math.random() * 50001);
    /* let randomNum: number;
    let cliente: Cliente | undefined;
    let existeNumero: boolean = false;

    do {
      randomNum = Math.floor(1000 + Math.random() * 9000);
      cliente = this.clientes.find((element) => {
        return element['ncliente'] == randomNum;
      });
    } while (cliente !== undefined);
*/
    return randomNum;
  }

  public nuevoEmpleado() {
    let ncliente: number = Math.floor(10 + Math.random() * 90);
    let saldo: number = this.generarNumeroAleatorio();
    this.clientes.push(new Cliente(ncliente, '', true, saldo));
    this.seleccionado = this.clientes.length - 1;
  }

  actualizarClientes(clientesActualizados: Cliente[]) {
    this.clientes = clientesActualizados;
    if (this.seleccionado > this.clientes.length - 1) this.seleccionado = 0;
  }

  public generarOperaciones(totalOperaciones: number) {
    this.listOperaciones.generarOperaciones(totalOperaciones);
  }
}
