import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListaOperacionesComponent } from './components/lista-operaciones/lista-operaciones.component';



@NgModule({
  declarations: [ClienteComponent,ListaClienteComponent, ListaOperacionesComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[ClienteComponent,ListaClienteComponent, ListaOperacionesComponent]
})
export class ClientesModule { }
