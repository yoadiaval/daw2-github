import { Component, ViewChild } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-empleados-empleado',
  standalone: false,
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
})
export class EmpleadoComponent {
  public empleadoact: Empleado = { id: 0, nombre: '', edad: 0, contratado:
 false }
  public titulo: string = 'Nuevo Empleado';
  constructor(private _aroute: ActivatedRoute, private _empleadosService: EmpleadosService, private _route:Router) { } ngOnInit() {
  const tipo = +this._aroute.snapshot.params['tipo'];
  const id = +this._aroute.snapshot.params['id']; // Recibimos parámetro
  if (tipo == 1)
  this.titulo = 'Modificar Empleado ('+id+')'
  else if (tipo == 2)
  this.titulo = 'Borrar Empleado ('+id+')';
  }
  guardaEmpleado(): void {
  this._empleadosService. guardaNuevoEmpleado(this.empleadoact);
  this._route.navigate(['/empleados']);
  }
 }
