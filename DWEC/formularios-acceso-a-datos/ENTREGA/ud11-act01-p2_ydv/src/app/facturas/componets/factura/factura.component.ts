import { Component } from '@angular/core';
import { Factura } from '../../factura';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturasService } from '../../facturas.service';

@Component({
  selector: 'app-facturas-factura',
  standalone: false,
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css',
})
export class FacturaComponent {
  public facturaact: Factura = {
    id: 0,
    cliente: '',
    fecha: '',
    importe: 0,
    iva: false,
  };
  public titulo: string = 'Nueva Factura';
  public tipo: number = 0;
  public id: number = 0;
  public txtBtn: string = 'Guardar';
  constructor(
    private _aroute: ActivatedRoute,
    private _facturasService: FacturasService,
    private _route: Router
  ) {}
  ngOnInit() {
    this.tipo = +this._aroute.snapshot.params['tipo'];
    this.id = +this._aroute.snapshot.params['id']; // Recibimos parámetro
    if (this.tipo == 1) {
      this.titulo = 'Modificar Factura (' + this.id + ')';
      this.traeFactura(this.id);
    } else if (this.tipo == 2) {
      this.titulo = 'Borrar Factura (' + this.id + ')';
      this.txtBtn = 'BORRAR';
      this.traeFactura(this.id);
    }
  }

  private traeFactura(id: number) {
    this._facturasService.obtengoFacturaApi(id).subscribe({
      next: (resultado) => {
        if (resultado.mensaje == 'OK') {
          this.facturaact = resultado.datos;
        } else {
          console.error('Error al obtener el factura:', resultado.mensaje);
        }
      },
      error: (error) => {
        console.error('Error al obtener el factura:', error);
      },
      complete: () => {
        console.log('Operación completada.');
      },
    });
  }

  guardaFactura(): void {
    if (this.tipo == 0) {
      /* this.facturaact.contratado = this.inputChecked ? 1 : 0;*/
      this._facturasService.guardaNuevaFacturaApi(this.facturaact).subscribe({
        next: (resultado) => {
          if (resultado.mensaje == 'OK') {
            console.log('Factura agregado:', resultado.estado);
            this._route.navigate(['/facturas']);
          } else {
            console.error('Error al agregar el factura:', resultado.error);
          }
        },
        error: (error) => {
          console.error('Error al agregar el factura:', error);
        },
        complete: () => {
          console.log('Operación completada.');
        },
      });
    } else if (this.tipo == 1) {
      /* this.facturaact.contratado = this.inputChecked ? 1 : 0;*/
      this._facturasService
        .modificaFacturaApi(this.id, this.facturaact)
        .subscribe({
          next: (resultado) => {
            if (resultado.mensaje == 'OK') {
              console.log('Factura modificado:', resultado.datos);
              this._route.navigate(['/facturas']);
            } else {
              console.error('Error al modificar el factura:', resultado.error);
            }
          },
          error: (error) => {
            console.error('Error al modificar el factura:', error);
          },
          complete: () => {
            console.log('Operación completada.');
          },
        });
    } else if (this.tipo == 2) {
      this._facturasService.borraFacturaApi(this.id).subscribe({
        next: (resultado) => {
          if (resultado.mensaje == 'OK') {
            console.log('Valor eliminado:', resultado.datos);
            this._route.navigate(['/facturas']);
          } else {
            console.error('Error al eliminar el factura:', resultado.error);
          }
        },
        error: (error) => {
          console.error('Error al borrar el valor:', error);
        },
        complete: () => {
          console.log('Operación completada.');
        },
      });
    }
    this._route.navigate(['/facturas']);
  }
}
