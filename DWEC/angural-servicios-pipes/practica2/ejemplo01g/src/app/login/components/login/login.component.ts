import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
public usuario = "";
public password = "";
/*el constructor solicita instancias de los servicios LoginService y Router*/
constructor(private _loginService:LoginService, private _route:Router){}

/*Se comprueba si el usuario pone los datos correctos conectando con el servicio,
 en caso verdadero redirecciona a /bienvenido de lo contrario emite una alerta de datos erróneos
*/
compruebaUsuario(){
  if(this._loginService.compruebaUsuario(this.usuario, this.password)){
    this._route.navigate(['/bienvenido']);
  }else{
    alert("Los datos no son válidos");
    this.usuario = "";
    this.password = "";
  };
}
}
