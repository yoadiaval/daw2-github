import { Component } from "@angular/core";
@Component({
selector: 'app-contador',
template: `<h3>Contador: {{ contador}} </h3>
<button (click)="incrementaEn(1)">+1</button>
<button (click)="reseteaContador()">Reset</button>
<button (click)="incrementaEn(-1)">-1</button>
<h4>Mostrando el método: {{ getContador() }}</h4>
<h4>Mostrando una expresión: {{ getContador()+1 }}</h4>
<input type="text" [placeholder]="textoInput">

<label>Cambia el contador por: </label>
<input type="text" (input)="modificarContador($event)">
`,
standalone: false,

})
export class ContadorComponent{
    public title: string = 'ejemplo01';
    public textoInput:string = "Texto en la clase";
    public contador: number = 10;
  
    constructor(){
      setTimeout(() => {
      this.textoInput = "Por favor...";
      }, 3000);
      }
    incrementaEn(valor:number):void{
    this.contador += valor;
    }
    reseteaContador(){
      this.contador = 10;
    }
    public getContador():number{
      return this.contador;
      }
      modificarContador(event: Event){
        console.log(event)
        this.contador = parseInt((<HTMLInputElement>event.target).value) || 0; //si no se le pasa nada pone cero 
     
      }
    }