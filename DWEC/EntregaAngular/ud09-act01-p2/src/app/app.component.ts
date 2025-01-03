import { Component, ViewChild } from '@angular/core';
import { ClienteComponent } from './clientes/components/cliente/cliente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('clienteComponent') clienteComponent!: ClienteComponent;
  title = 'ud09-act01-p2';
  public generarOperaciones(totalOperaciones: number) {
    this.clienteComponent.generarOperaciones(totalOperaciones);
  }
}
