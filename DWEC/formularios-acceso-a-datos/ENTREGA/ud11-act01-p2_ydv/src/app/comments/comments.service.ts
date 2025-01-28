import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  urlApi = 'http://test-api25s.jtarrega.es/api/comments';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

obtengoCommentsApi(): Observable<any> {
    return this.http.get(`${this.urlApi}`);
  }
  guardaNuevoCommentApi(comment: Comment): Observable<any> {
    return this.http.post<any>(
      `${this.urlApi}`,
      JSON.stringify(comment),
      this.httpOptions
    );
  }
  obtengoCommentApi(idcomment: number): Observable<any> {
    return this.http.get(`${this.urlApi}/${idcomment}`);
  }
  modificaCommentApi(idcomment: number, comment: Comment): Observable<any> {
    return this.http.put<any>(
      `${this.urlApi}/${idcomment}`,
      JSON.stringify(comment),
      this.httpOptions
    );
  }
  borraCommentApi(idcomment: number): Observable<any> {
    return this.http.delete(`${this.urlApi}/${idcomment}`);
  }
}
