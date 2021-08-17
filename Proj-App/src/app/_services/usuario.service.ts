import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../_models/Usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
baseURL = 'http://localhost:5000/api/usuario';

constructor(private http: HttpClient) { }

getUsuarios(): Observable<Usuario[]>{
  console.log(" \N\N\ O OBSERVABLE GETUSUSARIOS FOI UTILIZADO\N\N\ ");
  return this.http.get<Usuario[]>(this.baseURL);
}

getUsuariobyId(id: number): Observable<Usuario>{
  console.log("\N\N\N O OBSERVABLE GETUSUSARIOS ID FOI UTILIZADO\N\N\ ");
  return this.http.get<Usuario>(`${this.baseURL}/${id}`);
}

getUsuarioByNome(nome: string): Observable<Usuario>{
  return this.http.get<Usuario>(`${this.baseURL}/getByNome/${nome}`);
}

postUsuario(usuario: Usuario){
  return this.http.post(this.baseURL, usuario);
}
putUsuario(usuario: Usuario){
  return this.http.put(`${this.baseURL}/${usuario.id}`, usuario);
}

deleteUsuario(id: number){
  return this.http.delete(`${this.baseURL}/${id}`);
}

}
