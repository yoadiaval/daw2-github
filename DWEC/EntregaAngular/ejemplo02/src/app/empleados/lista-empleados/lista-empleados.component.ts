import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css',
})
export class ListaEmpleadosComponent {
  @Input() empleados: Empleado[] = [];
  @Output() empleadosActualizados = new EventEmitter<Empleado[]>();
  despedir(indice: number): void {
    this.empleados[indice].contratado = false;
    this.empleadosActualizados.emit(this.empleados);
  }
  contratar(indice: number): void {
    this.empleados[indice].contratado = true;
    this.empleadosActualizados.emit(this.empleados);
  }
  public colorD: string = 'lime';
  public colorC: string = 'red';
  borrar(indice: number): void {
    console.log('borrando empleado ' + indice);
    this.empleados.splice(indice, 1);
    this.empleadosActualizados.emit(this.empleados);
  }
}
