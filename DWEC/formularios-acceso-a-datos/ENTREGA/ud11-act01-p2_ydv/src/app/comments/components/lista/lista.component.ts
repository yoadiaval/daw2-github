import { Component } from '@angular/core';
import { CommentsService } from '../../comments.service';

@Component({
  selector: 'app-lista',
  standalone: false,

  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  comments: any;
  constructor(private _commentsService: CommentsService) {}
  ngOnInit() {
    this._commentsService.obtengoCommentsApi().subscribe({
      next: (resultado) => {
        if (resultado.mensaje == 'OK') {
          this.comments = resultado.datos;
        } else {
          console.error('Error al recibir datos:', resultado.error);
        }
      },
      error: (error) => {
        console.error('Error al recibir datos:', error);
      },
      complete: () => {
        console.log('Operación completada.');
      },
    });
  }
}
