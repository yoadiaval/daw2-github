import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = "yoannet";
  public password = "1234";
  public identificado: boolean = false;
  constructor() { }
  compruebaUsuario(usuario:string, password:string){
    this.identificado = (usuario == this.user && password == this.password)
    return this.identificado;
  }
  estaIdentificado(){
return this.identificado;
  }
  salirAplicacion(){
    this.identificado = false;
  }
}
