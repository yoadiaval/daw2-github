import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelojComponent } from './reloj/reloj/reloj.component';
import { RelojModule } from './reloj/reloj.module';
import { BancoModule } from './banco/banco.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RelojModule,
    BancoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
