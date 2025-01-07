import { Component, Input } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrl: './listaclientes.component.css'
})
export class ListaclientesComponent {
  @Input() clientes: Cliente[] = [];
}
