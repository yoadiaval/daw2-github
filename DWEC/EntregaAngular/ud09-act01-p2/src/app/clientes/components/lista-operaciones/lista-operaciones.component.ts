import { Component, Input, Output } from '@angular/core';
import { Operacion } from '../../operacion';
import { Cliente } from '../../cliente';

@Component({
  selector: 'app-lista-operaciones',
  templateUrl: './lista-operaciones.component.html',
  styleUrl: './lista-operaciones.component.css',
})
export class ListaOperacionesComponent {
  @Input() clientes: Cliente[] = [];
  public operaciones: Operacion[] = [];

  //Calculo el saldo total del Banco
  public saldoTotalBanco = this.clientes.reduce((acumulado, elemento) => {
    return acumulado + elemento.saldo;
  }, 0);

  generarOperaciones(totalOperaciones: number) {
    this.operaciones = []; //Se inicializa el array de operaciones para que borre las operaciones anteriores y solo muestre el bloque actual de operaciones.
    for (let i = 0; i < totalOperaciones; i++) {
      //Compruebo que el saldo total no sea cero
      if (this.saldoTotalBanco < 0) {
        //banco enquiebra
      }
      //Obtengo un cliente aleatorio
      let clienteAleatorio =
        this.clientes[Math.floor(Math.random() * this.clientes.length)];
      //Se elige una operacion aleatoria
      const esIngreso = Math.random() < 0.5;
      //Se obtiene un importe aleatorio
      const importe = Math.round(Math.random() * 5001 * 100) / 100;

      if (esIngreso) {
        clienteAleatorio.ingresar(importe);
      } else {
        clienteAleatorio.extraer(importe);
      }

      let numOperacion: number = i + 1;
      this.operaciones.push(
        new Operacion(
          numOperacion,
          clienteAleatorio.ncliente,
          clienteAleatorio.nombre,
          importe
        )
      );
    }
    //Se recalcula el saldo total del Banco
    this.saldoTotalBanco = this.clientes.reduce((acumulado, elemento) => {
      return acumulado + elemento.saldo;
    }, 0);
  }
}
