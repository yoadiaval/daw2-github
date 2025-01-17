import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  private USUARIO:string = 'javier';
  private CONTRASENYA:string = 'javier';
  private identificado: boolean = true;
  estaIdentificado(): boolean {
    console.log('comprobado identificado: '+this.identificado);
    return this.identificado;
  }
  compruebaUsuario(usuario:string, contrasenya:string):boolean{
    this.identificado = usuario == this.USUARIO && contrasenya == this.CONTRASENYA;
    return this.identificado;
  }
  salirAplicacion(){
    this.identificado = false;
  }
}
