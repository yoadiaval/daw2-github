import { Component, ViewChild } from '@angular/core';
import { Empleado } from '../empleado';
import { ListaComponent } from './lista.component';

@Component({
  selector: 'app-empleados-empleado',
  standalone: false,
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
})
export class EmpleadoComponent {
  @ViewChild('hijo') hijo!: ListaComponent;
  public empleado1: Empleado = new Empleado('Javier', 25);

  public seleccionado: number = 0;
  public nombre: string = 'Juan';

  public empleados: Empleado[] = [
    new Empleado('Javier', 25, true),
    new Empleado('Pepe', 52),
    new Empleado('Paco', 19, true),
    new Empleado('Pedro', 22),
  ];
  actualizarEmpleados(empleadosActualizados: Empleado[]) {
    this.empleados = empleadosActualizados;
    if (this.seleccionado > this.empleados.length - 1) this.seleccionado = 0;
  }
  public nuevoEmpleado() {
    this.empleados.push(new Empleado('', 0));
    this.seleccionado = this.empleados.length - 1;
  }

  /*public llamaAhijo() {
    if (this.empleados[this.seleccionado].contratado)
      this.hijo.despedir(this.seleccionado);
    else this.hijo.contratar(this.seleccionado);
  }*/
}
