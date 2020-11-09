import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../_models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

constructor(private http: HttpClient) { }

baseURL = 'http://localhost:5000/api/evento';

getEventos(): Observable<Evento[]>{
  return this.http.get<Evento[]>(this.baseURL);
}
}
