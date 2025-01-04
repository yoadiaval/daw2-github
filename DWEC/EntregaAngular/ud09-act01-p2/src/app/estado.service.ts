import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  // Inicializamos el saldo total en 0
  private saldoTotalSubject = new BehaviorSubject<number>(0);
  // Observable para que otros componentes se suscriban
  saldoTotal$ = this.saldoTotalSubject.asObservable();
  // Método para actualizar el saldo total
  actualizarSaldoTotal(nuevoSaldo: number) {
    this.saldoTotalSubject.next(nuevoSaldo); // Cambiar el saldo total
  }
}
