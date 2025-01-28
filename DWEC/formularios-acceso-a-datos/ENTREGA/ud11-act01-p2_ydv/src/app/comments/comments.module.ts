import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [CommentComponent, ListaComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CommentComponent, ListaComponent],
  providers: [provideHttpClient()],
})
export class CommentsModule {}
