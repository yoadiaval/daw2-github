import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  constructor() { }
  private empleados: Empleado[] = [
    new Empleado(1,'Javier', 25, true),
    new Empleado(2,'Pepe', 52),
    new Empleado(3,'Paco', 19, true),
    new Empleado(4,'Pedro', 22)
  ];
  obtengoEmpleados(): Empleado[] {
    return this.empleados;
  }
  /*observable es un origen de datos para manejar futura implementacion de acceso a datos externos */
  guardaNuevoEmpleado( empleado:Empleado): Observable<any> {
    let ultimoId: number = 0;
    if (this.empleados.length > 0)
    ultimoId = this.empleados[this.empleados.length-1].id;
    this.empleados.push(new Empleado(ultimoId+1, empleado.nombre,
   empleado.edad, empleado.contratado));
    return of(this.empleados[this.empleados.length-1]);
    }
    modificaEmpleado(nempleado:number, empleado:Empleado): Observable<any>{
      let indice = this.empleados.findIndex(item => item.id == nempleado);
      this.empleados[indice]=empleado;
      return of(this.empleados[indice]);
      }
      borraEmpleado(nempleado:number): Observable<any>{
      let indice = this.empleados.findIndex(item => item.id == nempleado);
      let empleadoAborrar = this.empleados[indice];
      this.empleados.splice(indice, 1);
      return of(empleadoAborrar);
      }
  obtengoEmpleado(nempleado:number):Empleado{
    let indice = this.empleados.findIndex(item => item.id == nempleado);
    let tmpEmpleado:Empleado = new Empleado(this.empleados[indice].id, this.empleados[indice].nombre, this.empleados[indice].edad, this.empleados[indice].contratado);
    return tmpEmpleado;
  }
}
