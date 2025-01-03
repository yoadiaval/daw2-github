import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { FormsModule } from '@angular/forms';
import { ListaEmpleadosComponent } from '../lista-empleados/lista-empleados.component';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule, ListaEmpleadosComponent],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
})
export class EmpleadoComponent {
  public empleados: Empleado[] = [
    new Empleado('Javier', 25, true),
    new Empleado('Pepe', 52),
    new Empleado('Paco', 19, true),
    new Empleado('Pedro', 22),
  ];
  public seleccionado: number = 0;
  actualizarEmpleados(empleadosActualizados: Empleado[]) {
    this.empleados = empleadosActualizados;
    if (this.seleccionado > this.empleados.length - 1) this.seleccionado = 0;
  }
  public nuevoEmpleado() {
    this.empleados.push(new Empleado('', 0));
    this.seleccionado = this.empleados.length - 1;
  }
}
