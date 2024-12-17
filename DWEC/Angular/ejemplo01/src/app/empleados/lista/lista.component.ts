import { Component } from '@angular/core';
import { Empleado } from '../empleado/empleado';
@Component({
  selector: 'app-empleados-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public colorD:string = 'lime';
public colorC:string = 'red';

  public empleados: Empleado[] = [
    new Empleado('Javier', 25, true),
    new Empleado('Pepe', 52),
    new Empleado('Paco', 19, true),
    new Empleado('Pedro', 22)
    ];

    public ctx:any = {estimate: this.empleados.length};

    despedir(indice:number): void {
      this.empleados[indice].contratado = false;
      }
      contratar(indice:number): void {
      this.empleados[indice].contratado = true;
      }
}
