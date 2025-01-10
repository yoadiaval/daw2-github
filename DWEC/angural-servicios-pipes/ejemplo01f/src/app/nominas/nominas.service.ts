import { Injectable } from '@angular/core';
import { Nomina } from './nominas';

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


  guardaNuevaNomina( nomina:Nomina){
    let ultimoId: number = 0;
    if (this.nominas.length > 0)
    ultimoId = this.nominas[this.nominas.length-1].numero;
    this.nominas.push(new Nomina(ultimoId+1, nomina.fecha,
   nomina.bruto, nomina.retencion));
    }
    modificaNomina(nNomina:number, nomina:Nomina){
      let indice = this.nominas.findIndex(item => item.numero == nNomina);
      this.nominas[indice]=nomina;
      }
      borraNomina(nNomina:number){
      let indice = this.nominas.findIndex(item => item.numero == nNomina);
      this.nominas.splice(indice, 1);
      }
      obtengoNomina(nNomina:number):Nomina{
      let indice = this.nominas.findIndex(item => item.numero == nNomina);
      return this.nominas[indice];
      }
 }