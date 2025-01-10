import { Component } from '@angular/core';
import { Factura } from '../../factura';
import { FacturasService } from '../../facturas.service';

@Component({
  selector: 'app-facturas-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  facturas: Factura[] = [];
  constructor(private _facturasService: FacturasService) { }
  ngOnInit() {
  this.facturas = this._facturasService.obtengoFacturas();
  }
  /*modificar(numfra: number): void { }
  borrar(numfra: number): void { }*/
}
