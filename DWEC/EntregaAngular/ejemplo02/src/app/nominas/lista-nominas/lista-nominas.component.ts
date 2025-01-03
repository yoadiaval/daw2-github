import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nomina } from '../nomina';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-nominas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-nominas.component.html',
  styleUrl: './lista-nominas.component.css',
})
export class ListaNominasComponent {
  @Input() nominas: Nomina[] = [];
  @Output() nominasActualizadas = new EventEmitter<Nomina[]>();
  borrar(indice: number): void {
    this.nominas.splice(indice, 1);
    this.nominasActualizadas.emit(this.nominas);
  }
}
