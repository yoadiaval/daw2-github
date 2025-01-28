import { CanActivateFn, ResolveFn } from '@angular/router';
import { EmpleadosService } from './empleados.service';
import { inject } from '@angular/core';

export const empleadoResolveGuard: ResolveFn<any> = (route, state) => {
  const _empleadosService = inject(EmpleadosService)
  const id: number = parseInt(route.paramMap.get('id')!);
  const tipo: number = parseInt(route.paramMap.get('tipo')!);
  if (id == 0 && tipo == 0)
    return true
  return _empleadosService.obtengoEmpleado(id);
};
