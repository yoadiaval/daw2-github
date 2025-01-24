import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  urlPhp = 'http://test-php.jtarrega.es/';
  /*urlApi = 'http://test-api25.jtarrega.es/api/empleados';*/
  urlApi='http://test-api25s.jtarrega.es/api/empleados';

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':'application/json',
   /* 'Authorization': `Bearer ${localStorage.getItem('token')}` */// Incluyeel token en las cabeceras
  })
  }
  constructor(private http: HttpClient) { }
  private empleados: Empleado[] = [
    //new Empleado(1,'Javier', 25, true),
    //new Empleado(2,'Pepe', 52),
    // new Empleado(3,'Paco', 19, true),
    // new Empleado(4,'Pedro', 22)
  ];

  /* guardaNuevoEmpleado(empleado: Empleado): Observable<any> {
     let ultimoId: number = 0;
     if (this.empleados.length > 0)
       ultimoId = this.empleados[this.empleados.length - 1].id;
     //this.empleados.push(new Empleado(ultimoId+1, empleado.nombre, empleado.edad, empleado.contratado));
     return of(this.empleados[this.empleados.length - 1]);
   }*/
  guardaNuevoEmpleadoPhp(empleado: Empleado): Observable<any> {
    return this.http.post<any>(`${this.urlPhp}/alta.php`,
      JSON.stringify(empleado));
  }

  /*modificaEmpleado(nempleado: number, empleado: Empleado): Observable<any> {
    let indice = this.empleados.findIndex((item) => item.id == nempleado);
    this.empleados[indice] = empleado;
    return of(this.empleados[indice]);
  }*/
  /*borraEmpleado(nempleado: number): Observable<any> {
    let indice = this.empleados.findIndex((item) => item.id == nempleado);
    let empleadoAborrar = this.empleados[indice];
    this.empleados.splice(indice, 1);
    return of(empleadoAborrar);
  }*/
  /*obtengoEmpleado(nempleado: number): Empleado {
    let indice = this.empleados.findIndex((item) => item.id == nempleado);
    //let tmpEmpleado:Empleado = new Empleado(this.empleados[indice].id, this.empleados[indice].nombre, this.empleados[indice].edad, this.empleados[indice].contratado);
    let tmpEmpleado: Empleado = new Empleado(
      this.empleados[indice].id,
      this.empleados[indice].nombre,
      this.empleados[indice].edad,
      ''
    );
    return tmpEmpleado;
  }*/

  modificaEmpleadoPhp(nempleado: number, empleado: Empleado): Observable<any> {
    return this.http.post<any>(`${this.urlPhp}/modificacion.php`,
      {
        'id': nempleado, 'nombre': empleado.nombre, 'edad': empleado.edad,
        'cargo': empleado.cargo, 'contratado': empleado.contratado
      });
  }
  obtengoEmpleadoPhp(nempleado: number): Observable<any> {
    return this.http.get(`${this.urlPhp}seleccionar.php?id=${nempleado}`);
  }
  borraEmpleadoPhp(nempleado: number): Observable<any> {
    return this.http.get(`${this.urlPhp}baja.php?id=${nempleado}`);
  }
  /*obtengoEmpleados(): Empleado[] {
    return this.empleados;
  }*/
  obtengoEmpleadosPhp(): Observable<any> {
    return this.http.get(`${this.urlPhp}recuperartodos.php`);
  }

  /*DESDE LA API*/
 obtengoEmpleadosApi(): Observable<any> {
 return this.http.get(`${this.urlApi}`, this.httpOptions);
 }
 guardaNuevoEmpleadoApi(empleado:Empleado): Observable<any> {
 return this.http.post<any>(`${this.urlApi}`, JSON.stringify(empleado),
this.httpOptions);
 }
 obtengoEmpleadoApi(nempleado:number):Observable<any> {
 return this.http.get(`${this.urlApi}/${nempleado}`, this.httpOptions);
 }
 modificaEmpleadoApi(nempleado:number, empleado:Empleado): Observable<any>{
 return this.http.put<any>(`${this.urlApi}/${nempleado}`,
JSON.stringify(empleado), this.httpOptions);
 }
 borraEmpleadoApi(nempleado:number): Observable<any>{
 return this.http.delete(`${this.urlApi}/${nempleado}`,
this.httpOptions);
 }

}
