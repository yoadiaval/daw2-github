import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ListaComponent } from './empleados/components/lista/lista.component';
import { ListaComponent as ListaFacturas } from './facturas/componets/lista/lista.component'; 
import { ListaComponent as ListaNominas } from './nominas/componets/lista/lista.component';
import { ListaComponent as ListaComments } from './comments/components/lista/lista.component';
import { EmpleadoComponent } from './empleados/components/empleado/empleado.component';
import { FacturaComponent } from './facturas/componets/factura/factura.component';
import { NominaComponent } from './nominas/componets/nomina/nomina.component';

import { abandonarPaginaGuard } from './empleados/abandonar-pagina.guard';

import { LoginComponent } from './login/components/login/login.component';
import { loginGuard } from './login/login.guard';
import { LogoutComponent } from './login/components/logout/logout.component';
import { CommentComponent } from './comments/components/comment/comment.component';

const routes: Routes = [
  /*Se definen todas las rutas de la aplicación con la modificación del GUARD de las funciones
guard del canActivate
*/
  { path: 'login', component: LoginComponent } /*Ruta del componente login*/,
  {
    path: 'logout',
    component: LogoutComponent,
  } /*Ruta del compomnente Logout*/,
  {
    path: 'bienvenido',
    component: BienvenidoComponent,
    canActivate: [loginGuard],
  },
  { path: 'empleados', component: ListaComponent, canActivate: [loginGuard] },
  {
    path: 'empleados/:tipo/:id',
    component: EmpleadoComponent,
    canActivate: [loginGuard],
    canDeactivate: [abandonarPaginaGuard],
  },
  { path: 'facturas', component: ListaFacturas, canActivate: [loginGuard] },
  {
    path: 'facturas/:tipo/:id',
    component: FacturaComponent,
    canActivate: [loginGuard],
  },
  { path: 'nominas', component: ListaNominas, canActivate: [loginGuard] },
  {
    path: 'nominas/:tipo/:id',
    component: NominaComponent,
    canActivate: [loginGuard],
  },
  { path: 'comments', component: ListaComments, canActivate: [loginGuard] },
  {
    path: 'comments/:tipo/:id',
    component: CommentComponent,
    canActivate: [loginGuard],
  },
  // Ruta por defecto (vacía) -> Redirigir a /welcome
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' },
  // Ruta que no coincide con ninguna de las anteriores
  { path: '**', redirectTo: '/bienvenido', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
