import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resolucionGestionBanco';
  saldoBanco = 0;
  actualizarSaldoBanco(saldoBancoActualizado: number) {
    this.saldoBanco = saldoBancoActualizado;
    }
}
