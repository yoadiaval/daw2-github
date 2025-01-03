import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { FacturaComponent } from './facturas/factura/factura.component';
import { NominaComponent } from './nominas/nomina/nomina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoComponent, FacturaComponent, NominaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejemplo02';
}
