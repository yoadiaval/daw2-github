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
constructor(private _loginService:LoginService, private _route:Router){}
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
