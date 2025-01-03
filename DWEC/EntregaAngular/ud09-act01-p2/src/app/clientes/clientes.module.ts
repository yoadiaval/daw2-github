import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClienteComponent,ListaClienteComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[ClienteComponent,ListaClienteComponent]
})
export class ClientesModule { }
