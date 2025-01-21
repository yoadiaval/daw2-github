import { Injectable } from '@angular/core';
import { Factura } from './factura';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  private facturas: Factura[] = [
    new Factura(1, '01/01/2024', true, 25),
    new Factura(2, '01/01/2024', true, 52),
    new Factura(3, '01/01/2024', true, 19),
    new Factura(4, '01/01/2024', true, 22)
  ];
  obtengoFacturas(): Factura[] {
    return this.facturas;
  }
  guardaNuevaFactura( factura:Factura):Observable<any>{
      let ultimoNum: number = 0;
      if (this.facturas.length > 0)
        ultimoNum = this.facturas[this.facturas.length-1].numero;
       this.facturas.push(new Factura(ultimoNum+1, factura.fecha, factura.iva, factura.cantidad));
       return of(this.facturas[this.facturas.length-1]);
      }
    modificaFactura(nfactura:number, factura:Factura): Observable<any>{
      let indice = this.facturas.findIndex(item => item.numero == nfactura);
      this.facturas[indice]=factura;
      return of(this.facturas[indice]);
    }
    borraFactura(nfactura:number):Observable<any>{
      let indice = this.facturas.findIndex(item => item.numero == nfactura);
      let facturaAborrar = this.facturas[indice];
      this.facturas.splice(indice, 1);
      return of(facturaAborrar);
    }
    obtengoFactura(nfactura:number):Factura{
      let indice = this.facturas.findIndex(item => item.numero == nfactura);
      let tmpFactura = new Factura(this.facturas[indice].numero, this.facturas[indice].fecha, this.facturas[indice].iva, this.facturas[indice].cantidad);
      return tmpFactura;
    }
}
