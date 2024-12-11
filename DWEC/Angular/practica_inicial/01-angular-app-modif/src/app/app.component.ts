import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '¡Mi primera WebApp en Angular19 CLI!';
  //funcion que cambia el título a los 5 segundos
  cambiarTitle = setTimeout(() => {
      this.title = '¡Título cambiado a los 5 segundos!';
    }, 5000);
 
  //Al iniciar el componente lo llama para que cambie el titulo a los 5 segundos
 
  mostrarAlerta() {
    alert(' Este es un mensaje de alerta.');
  }
}
