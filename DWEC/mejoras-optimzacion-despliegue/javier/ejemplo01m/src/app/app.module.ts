import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { EmpleadosModule } from './empleados/empleados.module';
import { FacturasModule } from './facturas/facturas.module';
import { NominasModule } from './nominas/nominas.module';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginModule } from './login/login.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { CommentsModule } from './comments/comments.module';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BienvenidoComponent,
    EncabezadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmpleadosModule,
    FacturasModule,
    NominasModule,
    LoginModule,
    CommentsModule
  ],
  providers: [
    Title, 
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
