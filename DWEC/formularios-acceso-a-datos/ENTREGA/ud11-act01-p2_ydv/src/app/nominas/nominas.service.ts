import { Injectable } from '@angular/core';
import { Nomina } from './nomina';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NominasService {
  urlApi = 'http://test-api25s.jtarrega.es/api/nominas';
  constructor(private http: HttpClient) {}
  private nominas: Nomina[] = [
  ];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  obtengoNominasApi(): Observable<any> {
    return this.http.get(`${this.urlApi}`);
  }
  guardaNuevaNominaApi(nomina: Nomina): Observable<any> {
    return this.http.post<any>(
      `${this.urlApi}`,
      JSON.stringify(nomina),
      this.httpOptions
    );
  }
  obtengoNominaApi(idnomina: number): Observable<any> {
    return this.http.get(`${this.urlApi}/${idnomina}`);
  }

  modificaNominaApi(idnomina: number, nomina: Nomina): Observable<any> {
    return this.http.put<any>(
      `${this.urlApi}/${idnomina}`,
      JSON.stringify(nomina),
      this.httpOptions
    );
  }
  borraNominaApi(idnomina: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/${idnomina}`);
  }

}
