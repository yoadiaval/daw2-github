import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private apiUrl = 'http://test-api25s.jtarrega.es/api';
  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }
  getToken(): string | null {
  return localStorage.getItem('token'); // Guarda el token en localStorage
  }
  saveToken(token: string): void {
  localStorage.setItem('token', token); // Guarda el token
  }
  estaIdentificado(): boolean {
  return this.getToken() !== null; // Verifica si el token existe
  }
  salirAplicacion(): void {
  localStorage.removeItem('token'); // Elimina el token
  }
 }
/*export class LoginService {

  constructor() { }
  private USUARIO:string = 'javier';
  private CONTRASENYA:string = 'javier';
  private identificado: boolean = false;
  estaIdentificado(): boolean {
    console.log('comprobado identificado: '+this.identificado);
    return this.identificado;
    // return true;
  }
  compruebaUsuario(usuario:string, contrasenya:string):boolean{
    this.identificado = usuario == this.USUARIO && contrasenya == this.CONTRASENYA;
    return this.identificado;
  }
  salirAplicacion(){
    this.identificado = false;
  }
}*/
