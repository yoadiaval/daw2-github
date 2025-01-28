import { Injectable } from '@angular/core';
import { Factura } from './factura';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  urlApi = 'http://test-api25s.jtarrega.es/api/facturas';
  constructor(private http: HttpClient) { }
  private facturas: Factura[] = [];

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


/*CRUD CON LAS API*/
obtengoFacturasApi(): Observable<any> {
    return this.http.get(`${this.urlApi}`);
  }
  guardaNuevaFacturaApi(factura: Factura): Observable<any> {
    return this.http.post<any>(
      `${this.urlApi}`,
      JSON.stringify(factura),
      this.httpOptions
    );
  }

  obtengoFacturaApi(idfactura: number): Observable<any> {
    return this.http.get(`${this.urlApi}/${idfactura}`);
  }

  modificaFacturaApi(idfactura: number, factura: Factura): Observable<any> {
    return this.http.put<any>(
      `${this.urlApi}/${idfactura}`,
      JSON.stringify(factura),
      this.httpOptions
    );
  }
  borraFacturaApi(idfactura: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/${idfactura}`);
  }

}
