import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../_models/Evento';

@Injectable({
  providedIn: 'root'
})

export class EventoService {
  baseURL = 'http://localhost:5000/api/evento';

  constructor(private http: HttpClient) { }

  getAllEventos(): Observable<Evento[]> {
    console.log(this.http.get<Evento[]>(this.baseURL));
    return this.http.get<Evento[]>(this.baseURL);
  }
  getEventoAgenda(): Observable<Evento[]>{
    
    return this.http.get<Evento[]>(this.baseURL);
  }
  getEventoByTitulo(titulo: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseURL}/getByTitulo/${titulo}`);
  }

}