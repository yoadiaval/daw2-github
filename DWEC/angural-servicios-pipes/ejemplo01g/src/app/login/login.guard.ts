import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService); //se injecta el servicio ya que no tenemos constructor 
  const router = inject(Router); //se injecta una instancia delservicio Router
  /*Verifica si no se está logueado, en tal caso redirigea login*/ 
  if (!loginService.estaIdentificado()) {
    return router.navigateByUrl('/login');
  }
  return true;

};
