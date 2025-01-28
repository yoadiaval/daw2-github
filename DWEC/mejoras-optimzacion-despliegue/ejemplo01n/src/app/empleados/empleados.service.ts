import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  urlPhp='http://test-php.jtarrega.es/';
  urlApi='http://test-api25s.jtarrega.es/api/empleados';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
    
  constructor(private http: HttpClient) { }
  private empleados: Empleado[] = [
    // new Empleado(1,'Javier', 25, '', 1),
    // new Empleado(2,'Pepe', 52, ''),
    // new Empleado(3,'Paco', 19, '', 1),
    // new Empleado(4,'Pedro', 22, '')
  ];

  // ARRAY
  obtengoEmpleados(): Empleado[] {
    return this.empleados;
  }
  guardaNuevoEmpleado( empleado:Empleado): Observable<any> {
    let ultimoId: number = 0;
    if (this.empleados.length > 0)
      ultimoId = this.empleados[this.empleados.length-1].id;
    this.empleados.push(new Empleado(ultimoId+1, empleado.nombre, empleado.edad, '', empleado.contratado));
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
    let tmpEmpleado:Empleado = new Empleado(this.empleados[indice].id, this.empleados[indice].nombre, this.empleados[indice].edad, this.empleados[indice].cargo, this.empleados[indice].contratado);
    return tmpEmpleado;
  }

  // AJAX PHP
  obtengoEmpleadosPhp(): Observable<any> {
    return this.http.get(`${this.urlPhp}recuperartodos.php`);
  }
  guardaNuevoEmpleadoPhp( empleado:Empleado): Observable<any> {
    return this.http.post<any>(`${this.urlPhp}/alta.php`, JSON.stringify(empleado));
  }
  modificaEmpleadoPhp(nempleado:number, empleado:Empleado): Observable<any>{
    return this.http.post<any>(`${this.urlPhp}/modificacion.php`, {'id':nempleado,'nombre':empleado.nombre, 'edad':empleado.edad, 'cargo':empleado.cargo, 'contratado': empleado.contratado});
  }
  obtengoEmpleadoPhp(nempleado:number):Observable<any> {
    return this.http.get(`${this.urlPhp}seleccionar.php?id=${nempleado}`);
  }
  borraEmpleadoPhp(nempleado:number): Observable<any>{
    return this.http.get(`${this.urlPhp}baja.php?id=${nempleado}`);
  }

  // API
  obtengoEmpleadosApi(): Observable<any> {
    return this.http.get(`${this.urlApi}`);
  }
  guardaNuevoEmpleadoApi(empleado:Empleado): Observable<any> {
    return this.http.post<any>(`${this.urlApi}`, JSON.stringify(empleado), this.httpOptions);
  }
  obtengoEmpleadoApi(nempleado:number):Observable<any> {
    return this.http.get(`${this.urlApi}/${nempleado}`);
  }
  modificaEmpleadoApi(nempleado:number, empleado:Empleado): Observable<any>{
    return this.http.put<any>(`${this.urlApi}/${nempleado}`, JSON.stringify(empleado), this.httpOptions);
  }
  borraEmpleadoApi(nempleado:number): Observable<any>{
    return this.http.delete(`${this.urlApi}/${nempleado}`);
  }
}

