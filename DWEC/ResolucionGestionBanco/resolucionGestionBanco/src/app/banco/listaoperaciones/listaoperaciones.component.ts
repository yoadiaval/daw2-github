import { Component, Input } from '@angular/core';
import { Operacion } from '../operacion';

@Component({
  selector: 'app-listaoperaciones',
  templateUrl: './listaoperaciones.component.html',
  styleUrl: './listaoperaciones.component.css'
})
export class ListaoperacionesComponent {
  @Input() operaciones: Operacion[] = [];
}
