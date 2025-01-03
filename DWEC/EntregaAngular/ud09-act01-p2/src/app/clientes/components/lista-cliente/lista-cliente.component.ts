import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Cliente } from '../../cliente';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrl: './lista-cliente.component.css'
})
export class ListaClienteComponent {
@Input() clientes: Cliente[] = [];
@Output() clientesActualizados = new EventEmitter<Cliente[]>();
public colorActivo = "green"; 
public colorInactivo = "black";
}
