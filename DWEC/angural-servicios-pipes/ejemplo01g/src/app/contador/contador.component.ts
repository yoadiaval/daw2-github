import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html',
  template: `<h2>Componente contador</h2>`,
  standalone: false,
})
export class ContadorComponent {
  public textoInput: string = 'texto en la clase';
  public contador: number = 10;
  constructor() {
    setTimeout(() => {
      this.textoInput = 'Por favor...';
    }, 3000);
  }
  incrementaEn(valor: number): void {
    this.contador += valor;
  }
  public reseteaContador(): void {
    this.contador = 10;
  }
  public getContador(): number {
    return this.contador;
  }

  modificarContador(event:Event){
    this.contador = parseInt((<HTMLInputElement>event.target).value) || 0;
  };
}
