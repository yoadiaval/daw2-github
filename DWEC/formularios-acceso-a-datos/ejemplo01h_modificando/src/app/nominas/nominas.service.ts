import { Injectable } from '@angular/core';
import { Nomina } from './nomina';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NominasService {
  constructor() { }
  private nominas: Nomina[] = [
    new Nomina(1, '01/01/2024', 1000, 25),
    new Nomina(2, '01/01/2024', 2000, 52),
    new Nomina(3, '01/01/2024', 3000, 19),
    new Nomina(4, '01/01/2024', 4000, 22)
  ];
  obtengoNominas(): Nomina[] {
    return this.nominas;
  }
  guardaNuevaNomina(nomina: Nomina):Observable<any> {
    let ultimoNum: number = 0;
    if (this.nominas.length > 0)
      ultimoNum = this.nominas[this.nominas.length - 1].numero;
    this.nominas.push(new Nomina(ultimoNum + 1, nomina.fecha, nomina.bruto, nomina.retencion));
  return of(this.nominas[this.nominas.length-1]);
  }
  modificaNomina(nnomina: number, nomina: Nomina):Observable<any>  {
    let indice = this.nominas.findIndex(item => item.numero == nnomina);
    this.nominas[indice] = nomina;
    return of(this.nominas[indice]);
  }
  borraNomina(nnomina: number):Observable<any>  {
    let indice = this.nominas.findIndex(item => item.numero == nnomina);
    let nominaAborrar = this.nominas[indice];
    this.nominas.splice(indice, 1);
    return of(nominaAborrar);
  }
  obtengoNomina(nnomina: number): Nomina {
    let indice = this.nominas.findIndex(item => item.numero == nnomina);
    let tmpNomina = new Nomina(this.nominas[indice].numero, this.nominas[indice].fecha, this.nominas[indice].bruto, this.nominas[indice].retencion);
    return tmpNomina;
  }
}