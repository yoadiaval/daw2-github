import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);  return true;
  const router = inject(Router);
  if(!loginService.estaIdentificado){
    return router.navigateByUrl('/login');
  }
  return true;

};
