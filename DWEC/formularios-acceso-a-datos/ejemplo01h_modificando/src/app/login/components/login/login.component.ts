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
  public usuario: string = '';
  public contrasenya: string = '';

  constructor(private _loginService: LoginService, private _route: Router) { }
  compruebaUsuario(): void {
    if (this._loginService.compruebaUsuario(this.usuario, this.contrasenya)) {
      console.log('Usuario identificado');
      this._route.navigate(['/bienvenido']);
    } else {
      alert('Usuario o contraseña incorrectos, íntentalo de nuevo');
      this.usuario = '';
      this.contrasenya = '';
    }
  }
}
