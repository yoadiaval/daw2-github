import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { NominaComponent } from './components/nomina/nomina.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaComponent,
    NominaComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    NominaComponent,
    ListaComponent
  ]
})
export class NominasModule { }
