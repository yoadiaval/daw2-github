import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleados-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  
  public empleado1: Empleado = new Empleado('Javier', 25);
  get enMayusculaNombre():string{
    return this.empleado1.nombre.toUpperCase();
    }
  getNombreEdad():string{
      return `${ this.empleado1.nombre} - ${ this.empleado1.edad}`
      }
  cambiaEmpleado():void{
        this.empleado1.nombre = 'Paco';
        }
        cambiaEdad():void{
        this.empleado1.edad = 44;
        }
  restableceValores():void{
          this.empleado1.nombre = 'Javier';
          this.empleado1.edad = 25;
          }
}
