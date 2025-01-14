import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { FormsModule } from '@angular/forms';
import { SueldoNetoPipe } from './pipes/sueldo-neto.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaComponent,
    NominaComponent,
    SueldoNetoPipe
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule
  ],
  exports:[
    NominaComponent,
    ListaComponent
  ]
})
export class NominasModule { }
