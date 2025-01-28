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
  urlApi = 'http://test-api25s.jtarrega.es/api/empleados';
  constructor(private http: HttpClient) {}
  private empleados: Empleado[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  obtengoEmpleadosApi(): Observable<any> {
    return this.http.get(`${this.urlApi}`);
  }
  guardaNuevoEmpleadoApi(empleado: Empleado): Observable<any> {
    return this.http.post<any>(
      `${this.urlApi}`,
      JSON.stringify(empleado),
      this.httpOptions
    );
  }
  obtengoEmpleadoApi(nempleado: number): Observable<any> {
    return this.http.get(`${this.urlApi}/${nempleado}`);
  }
  modificaEmpleadoApi(nempleado: number, empleado: Empleado): Observable<any> {
    return this.http.put<any>(
      `${this.urlApi}/${nempleado}`,
      JSON.stringify(empleado),
      this.httpOptions
    );
  }
  borraEmpleadoApi(nempleado: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/${nempleado}`);
  }
}
