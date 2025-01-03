import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojComponent } from './reloj.component';



@NgModule({
  declarations: [RelojComponent],
  imports: [
    CommonModule
  ],
  exports:[RelojComponent]
})
export class RelojModule { }
