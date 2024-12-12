import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { ListaComponent } from './empleados/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    EmpleadoComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
