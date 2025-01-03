import { Component } from '@angular/core';
import { Nomina } from '../nomina';
import { FormsModule } from '@angular/forms';
import { ListaNominasComponent } from '../lista-nominas/lista-nominas.component';
@Component({
  selector: 'app-nomina',
  standalone: true,
  imports: [FormsModule, ListaNominasComponent],
  templateUrl: './nomina.component.html',
  styleUrl: './nomina.component.css',
})
export class NominaComponent {
  public nominas: Nomina[] = [
    new Nomina(1, '01/01/2024', 1000, 25),
    new Nomina(2, '01/01/2024', 2000, 52),
    new Nomina(3, '01/01/2024', 3000, 19),
    new Nomina(4, '01/01/2024', 4000, 22),
  ];
  public seleccionado: number = 0;
  actualizarNominas(nominasActualizadas: Nomina[]) {
    this.nominas = nominasActualizadas;
    if (this.seleccionado > this.nominas.length - 1) this.seleccionado = 0;
  }
  public nuevaNomina() {
    this.nominas.push(new Nomina(this.nominas.length + 1, '01/01/2024', 0, 0));
    this.seleccionado = this.nominas.length - 1;
  }
}
