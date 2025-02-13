import { Component, ViewChild } from '@angular/core';
import { Cliente } from '../../cliente';
import { ListaOperacionesComponent } from '../lista-operaciones/lista-operaciones.component';
import { Operacion } from '../../operacion';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  @ViewChild('listOperaciones') listOperaciones!: ListaOperacionesComponent;
  public seleccionado: number = 0;

  public generarNumeroAleatorio(): number {
    let randomNum = Math.random() * 50001;
    return Math.round(randomNum * 100) / 100; //devuelve el valor redondeado a dos decimales
  }

  public clientes: Cliente[] = [
    new Cliente(1262, 'Pedro', true, this.generarNumeroAleatorio()),
    new Cliente(1254, 'Luis', true, this.generarNumeroAleatorio()),
    new Cliente(3654, 'Juan', true, this.generarNumeroAleatorio()),
  ];


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
