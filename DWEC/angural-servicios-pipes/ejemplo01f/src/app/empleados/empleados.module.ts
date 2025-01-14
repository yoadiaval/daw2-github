import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { FiltroEmpleadosPipe } from './pipes/filtro-empleados.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmpleadoComponent,
    ListaComponent,
    FiltroEmpleadosPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    EmpleadoComponent,
    ListaComponent
  ],
})
export class EmpleadosModule { }
