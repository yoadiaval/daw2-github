import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoComponent } from './components/empleado.component';
import { ListaComponent } from './components/lista.component';



@NgModule({
  declarations: [EmpleadoComponent, ListaComponent],
  imports: [CommonModule, FormsModule],
  exports: [EmpleadoComponent, ListaComponent],
})
export class EmpleadosModule {}
