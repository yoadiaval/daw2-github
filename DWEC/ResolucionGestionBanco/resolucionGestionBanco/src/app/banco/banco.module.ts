import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { ListaclientesComponent } from './listaclientes/listaclientes.component';
import { ListaoperacionesComponent } from './listaoperaciones/listaoperaciones.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClienteComponent,
    ListaclientesComponent,
    ListaoperacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ClienteComponent, ListaclientesComponent, ListaoperacionesComponent]
})
export class BancoModule { }
