import { Component } from '@angular/core';
import { Nomina } from '../../nomina';
import { NominasService } from '../../nominas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nominas-nomina',
  standalone: false,
  templateUrl: './nomina.component.html',
  styleUrl: './nomina.component.css',
})
export class NominaComponent {
  public nominaact: Nomina = {
    id: 0,
    nombre: '',
    fecha: '',
    bruto: 0,
    retencion: 0,
  };
  public titulo: string = 'Nueva Nómina';
  public tipo: number = 0;
  public id: number = 0;
  public txtBtn: string = 'Guardar';
  constructor(
    private _aroute: ActivatedRoute,
    private _nominasService: NominasService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.tipo = +this._aroute.snapshot.params['tipo'];
    this.id = +this._aroute.snapshot.params['id']; // Recibimos parámetro
    if (this.tipo == 1) {
      this.titulo = 'Modificar Nómina (' + this.id + ')';
      this.traeNomina(this.id);
    } else if (this.tipo == 2) {
      this.titulo = 'Borrar Nómina (' + this.id + ')';
      this.txtBtn = 'BORRAR';
      this.traeNomina(this.id);
    }
  }

  private traeNomina(id: number) {
    this._nominasService.obtengoNominaApi(id).subscribe({
      next: (resultado) => {
        if (resultado.mensaje == 'OK') {
          this.nominaact = resultado.datos;
          
        } else {
          console.error('Error al obtener el nomina:', resultado.mensaje);
        }
      },
      error: (error) => {
        console.error('Error al obtener el nomina:', error);
      },
      complete: () => {
        console.log('Operación completada.');
      },
    });
  }

  guardaNomina(): void {
   if (this.tipo == 0) {
     
     this._nominasService.guardaNuevaNominaApi(this.nominaact).subscribe({
       next: (resultado) => {
         if (resultado.mensaje == 'OK') {
           console.log('Nomina agregada:', resultado.estado);
           this._route.navigate(['/nominas']);
         } else {
           console.error('Error al agregar el nomina:', resultado.error);
         }
       },
       error: (error) => {
         console.error('Error al agregar el nomina:', error);
       },
       complete: () => {
         console.log('Operación completada.');
       },
     });
   } else if (this.tipo == 1) {
    
     this._nominasService
       .modificaNominaApi(this.id, this.nominaact)
       .subscribe({
         next: (resultado) => {
           if (resultado.mensaje == 'OK') {
             console.log('Nomina modificada:', resultado.datos);
             this._route.navigate(['/nominas']);
           } else {
             console.error('Error al modificar el nomina:', resultado.error);
           }
         },
         error: (error) => {
           console.error('Error al modificar el nomina:', error);
         },
         complete: () => {
           console.log('Operación completada.');
         },
       });
   } else if (this.tipo == 2) {
     this._nominasService.borraNominaApi(this.id).subscribe({
       next: (resultado) => {
         if (resultado.mensaje == 'OK') {
           console.log('Valor eliminado:', resultado.datos);
           this._route.navigate(['/nominas']);
         } else {
           console.error('Error al eliminar el nomina:', resultado.error);
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
    this._route.navigate(['/nominas']);
  }
}