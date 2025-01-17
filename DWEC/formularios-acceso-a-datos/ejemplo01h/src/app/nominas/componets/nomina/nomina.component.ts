import { Component } from '@angular/core';
import { Nomina } from '../../nomina';
import { ActivatedRoute, Router } from '@angular/router';
import { NominasService } from '../../nominas.service';

@Component({
  selector: 'app-nominas-nomina',
  standalone: false,

  templateUrl: './nomina.component.html',
  styleUrl: './nomina.component.css'
})
export class NominaComponent {
  public nominaact: Nomina = { numero: 0, fecha: '', bruto: 0, retencion: 0 }
  public titulo: string = 'Nueva Nomina';
  public tipo: number = 0;
  public nnomina: number = 0;
  public txtBtn: string = 'Guardar';
  constructor(private _aroute: ActivatedRoute, private _nominasService: NominasService, private _route: Router) { }
  ngOnInit() {
    this.tipo = +this._aroute.snapshot.params['tipo'];
    this.nnomina = +this._aroute.snapshot.params['id']; // Recibimos parámetro
    if (this.tipo == 1) {
      this.titulo = 'Modificar Nómina (' + this.nnomina + ')';
      this.nominaact = this._nominasService.obtengoNomina(this.nnomina);
    } else if (this.tipo == 2) {
      this.titulo = 'Borrar Nómina (' + this.nnomina + ')';
      this.txtBtn = 'BORRAR';
      this.nominaact = this._nominasService.obtengoNomina(this.nnomina);
    }
  }

  guardaNomina(): void {
    if (this.tipo == 0) {
      this._nominasService.guardaNuevaNomina(this.nominaact);
    }
    else if (this.tipo == 1) {
      this._nominasService.modificaNomina(this.nnomina, this.nominaact);
    }
    else if (this.tipo == 2) {
      this._nominasService.borraNomina(this.nnomina);
    }
    this._route.navigate(['/nominas']);
  }
}
