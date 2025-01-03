import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.css',
})
export class RelojComponent {
  public hora: string = '';

  public constructor() {
    // Configurar el intervalo para actualizar la hora cada segundo
    setInterval(() => {
      this.obtenerHora();
    }, 1000);
  }

  // Método para obtener la hora actual
  obtenerHora() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    this.hora = `${horas}:${minutos}:${segundos}`;
  }
}
