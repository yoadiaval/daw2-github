import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = "yoannet";
  public password = "1234";
  public identificado: boolean = false;
  constructor() { }
  /*Se comprueba si que el usuario y la contraseña son correctos*/ 
  compruebaUsuario(usuario:string, password:string){
    this.identificado = (usuario == this.user && password == this.password)
    return this.identificado;
  }

  /*Retorna el estado de estaIdentificado*/
  estaIdentificado(){
return this.identificado;
  }

  /*Cambia el estado de estaIdentificado a false al ejecutarse este método */
  salirAplicacion(){
    this.identificado = false;
  }
}
