import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../empleado';
@Component({
  selector: 'app-empleados-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  @Input() nombre: string = '';
  @Input() empleados: Empleado[] = [];
  @Output() empleadosActualizados = new EventEmitter<Empleado[]>();
  public colorD: string = 'lime';
  public colorC: string = 'red';
 
  despedir(indice: number): void {
    this.empleados[indice].contratado = false;
  }
  contratar(indice: number): void {
    this.empleados[indice].contratado = true;
  }
  borrar(indice: number): void {
    this.empleados.splice(indice, 1);
    this.empleadosActualizados.emit(this.empleados);
  }
  
}
