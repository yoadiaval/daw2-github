import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.css'
})
export class RelojComponent {
  public textoHora: string = "";
  private intervalo: any;
  ngOnInit(): void {
    this.intervalo = setInterval(() => {

      const ahora = new Date();
      const horas = ahora.getHours().toString().padStart(2, "0");
      const minutos = ahora.getMinutes().toString().padStart(2,
        "0");
      const segundos = ahora.getSeconds().toString().padStart(2,
        "0");
      this.textoHora = `${horas}:${minutos}:${segundos}`;
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo)
  }
}