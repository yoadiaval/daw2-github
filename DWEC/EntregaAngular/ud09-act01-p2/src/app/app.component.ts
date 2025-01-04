import { Component, ViewChild } from '@angular/core';
import { ClienteComponent } from './clientes/components/cliente/cliente.component';
import { EstadoService } from './estado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('clienteComponent') clienteComponent!: ClienteComponent;
  title = 'ud09-act01-p2';
  saldoTotal: number = 0; // Variable para almacenar el saldo total
  constructor(private estadoService: EstadoService) {}

  public generarOperaciones(totalOperaciones: number) {
    this.clienteComponent.generarOperaciones(totalOperaciones);
  }

  ngOnInit() {
    // Nos suscribimos al observable saldoTotal$ del servicio
    this.estadoService.saldoTotal$.subscribe((saldo) => {
      this.saldoTotal = saldo; // Actualizamos el saldo total
    });
  }
}
