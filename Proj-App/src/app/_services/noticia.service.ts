import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../_models/Noticia';


@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  baseURL = 'http://localhost:5000/api/noticia';
  
  constructor(private http: HttpClient) { }

  getAllNoticias(): Observable<Noticia[]> {
    console.log(this.http.get<Noticia[]>(this.baseURL));
    return this.http.get<Noticia[]>(this.baseURL);
  }

  getNoticiaByManchete(manchete: string): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${this.baseURL}/getByManchete/${manchete}`);
  }
}
