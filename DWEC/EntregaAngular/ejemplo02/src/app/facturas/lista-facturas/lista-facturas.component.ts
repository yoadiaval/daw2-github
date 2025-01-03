import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Factura } from '../factura';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-facturas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-facturas.component.html',
  styleUrl: './lista-facturas.component.css',
})
export class ListaFacturasComponent {
  @Input() facturas: Factura[] = [];
  @Output() facturasActualizadas = new EventEmitter<Factura[]>();
  sinIva(indice: number): void {
    this.facturas[indice].iva = false;
    this.facturasActualizadas.emit(this.facturas);
  }
  conIva(indice: number): void {
    this.facturas[indice].iva = true;
    this.facturasActualizadas.emit(this.facturas);
  }

  public colorD: string = 'lime';
  public colorC: string = 'red';

  borrar(indice: number): void {
    this.facturas.splice(indice, 1);
    this.facturasActualizadas.emit(this.facturas);
  }
}
