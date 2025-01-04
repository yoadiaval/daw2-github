import { Component, Input, Output } from '@angular/core';
import { Operacion } from '../../operacion';
import { Cliente } from '../../cliente';
import { EstadoService } from '../../../estado.service';

@Component({
  selector: 'app-lista-operaciones',
  templateUrl: './lista-operaciones.component.html',
  styleUrl: './lista-operaciones.component.css',
})
export class ListaOperacionesComponent {
  @Input() clientes: Cliente[] = [];
  public operaciones: Operacion[] = [];

  constructor(private estadoService: EstadoService) {}
  //Calculo el saldo total del Banco
  public saldoTotalBanco = 0;

  //Inicializo los valores de saldoTotal del banco y lo actualizo en el Servicio de estado
  ngOnInit() {
    this.saldoTotalBanco = this.clientes.reduce((acumulado, elemento) => {
      return acumulado + elemento.saldo;
    }, 0);
    this.estadoService.actualizarSaldoTotal(this.saldoTotalBanco);
  }

  generarOperaciones(totalOperaciones: number) {
    this.operaciones = []; //Se inicializa el array de operaciones para que borre las operaciones anteriores y solo muestre el bloque actual de operaciones.

    for (let i = 0; i < totalOperaciones; i++) {
      //Compruebo que el saldo total no sea menor que cero
      if (this.saldoTotalBanco > 0) {
        //Obtengo un cliente aleatorio
        let clienteAleatorio =
          this.clientes[Math.floor(Math.random() * this.clientes.length)];

        //Se elige una operacion aleatoria
        const esIngreso = Math.random() < 0.5;
        //Se obtiene un importe aleatorio
        const importe = Math.round((Math.random() * 10001 - 5000) * 100) / 100;

        if (esIngreso) {
          clienteAleatorio.ingresar(Math.abs(importe)); //se llama al método ingresar y se le pasa por parámetro el valor absoluto del importe
        } else {
          clienteAleatorio.extraer(Math.abs(importe)); //se llama al método extraer y se le pasa por parámetro el valor absoluto del importe
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
        //Se recalcula el saldo total del Banco
        this.saldoTotalBanco = this.clientes.reduce((acumulado, elemento) => {
          return acumulado + elemento.saldo;
        }, 0);
        this.estadoService.actualizarSaldoTotal(this.saldoTotalBanco);
      }
    }
  }
}
