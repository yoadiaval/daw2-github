import { Component } from '@angular/core';
import { Cliente } from '../../cliente';
import { ListaClienteComponent } from '../lista-cliente/lista-cliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
})
export class ClienteComponent {
  public seleccionado: number = 0;
  public clientes: Cliente[] = [
    new Cliente(1262, 'Pedro', true, 5000),
    new Cliente(1254, 'Luis', true, 5000),
    new Cliente(3654, 'Juan', true, 5000),
  ];
  public generarNumeroAleatorio(): number {
    let randomNum: number;
    let cliente: Cliente | undefined;
    let existeNumero: boolean = false;

    do {
      randomNum = Math.floor(1000 + Math.random() * 9000);
      cliente = this.clientes.find((element) => {
        return element['ncliente'] == randomNum;
      });
    } while (cliente !== undefined);

    return randomNum;
  }

  public nuevoEmpleado() {
    let ncliente: number = this.generarNumeroAleatorio();
    this.clientes.push(new Cliente(ncliente, '', true, 5000));
    this.seleccionado = this.clientes.length - 1;
  }

  actualizarClientes(clientesActualizados: Cliente[]) {
    this.clientes = clientesActualizados;
    if (this.seleccionado > this.clientes.length - 1) this.seleccionado = 0;
  }
}
