import { Component, ViewChild } from '@angular/core';
import { Comment } from '../../comment';
import { CommentsService } from '../../comments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: false,

  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  public commentact: Comment = {
    id: 0,
    nombre: '',
    email: '',
    mensaje: '',
  };
  public titulo: string = 'Nuevo Comment';
  public tipo: number = 0;
  public id: number = 0;
  public txtBtn: string = 'Guardar';
  public formularioCambiado: boolean = false;
  @ViewChild('commentForm', { static: true }) commentForm: NgForm | undefined;

  constructor(
    private _aroute: ActivatedRoute,
    private _commentsService: CommentsService,
    private _route: Router
  ) {}
  ngOnInit() {
    this.tipo = +this._aroute.snapshot.params['tipo'];
    this.id = +this._aroute.snapshot.params['id']; // Recibimos parámetro
    if (this.tipo == 1) {
      this.titulo = 'Modificar Comment (' + this.id + ')';
      this.traeComment(this.id);
    } else if (this.tipo == 2) {
      this.titulo = 'Borrar Comment (' + this.id + ')';
      this.txtBtn = 'BORRAR';
      this.traeComment(this.id);
    }
  }
  private traeComment(id: number) {
    this._commentsService.obtengoCommentApi(id).subscribe({
      next: (resultado) => {
        if (resultado.mensaje == 'OK') {
          this.commentact = resultado.datos;
        } else {
          console.error('Error al obtener el comment:', resultado.mensaje);
        }
      },
      error: (error) => {
        console.error('Error al obtener el comment:', error);
      },
      complete: () => {
        console.log('Operación completada.');
      },
    });
  }

  guardaComment(): void {
    if (this.commentForm!.valid || this.tipo == 2) {
      //El borrado era readonly
      this.formularioCambiado = false;
      if (this.tipo == 0) {
       

        this._commentsService
          .guardaNuevoCommentApi(this.commentact)
          .subscribe({
            next: (resultado) => {
              if (resultado.mensaje == 'OK') {
                console.log('Comment agregado:', resultado.estado);
                this._route.navigate(['/comments']);
              } else {
                console.error('Error al agregar el comment:', resultado.error);
              }
            },
            error: (error) => {
              console.error('Error al agregar el comment:', error);
            },
            complete: () => {
              console.log('Operación completada.');
            },
          });
      } else if (this.tipo == 1) {
        this._commentsService
          .modificaCommentApi(this.id, this.commentact)
          .subscribe({
            next: (resultado) => {
              if (resultado.mensaje == 'OK') {
                console.log('Comment modificado:', resultado.datos);
                this._route.navigate(['/comments']);
              } else {
                console.error(
                  'Error al modificar el comment:',
                  resultado.error
                );
              }
            },
            error: (error) => {
              console.error('Error al modificar el comment:', error);
            },
            complete: () => {
              console.log('Operación completada.');
            },
          });
      } else if (this.tipo == 2) {
        this._commentsService.borraCommentApi(this.id).subscribe({
          next: (resultado) => {
            if (resultado.mensaje == 'OK') {
              console.log('Valor eliminado:', resultado.datos);
              this._route.navigate(['/comments']);
            } else {
              console.error('Error al eliminar el comment:', resultado.error);
            }
          },
          error: (error) => {
            console.error('Error al borrar el valor:', error);
          },
          complete: () => {
            console.log('Operación completada.');
          },
        });
      }
    }
  }
}
