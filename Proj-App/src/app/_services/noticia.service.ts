import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../_models/Noticia';


@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  
  baseURL = 'https://servico.feevale.br/site/v1/noticias/0/10/Museu%20Nacional%20do%20Cal%C3%A7ado%20-%20MNC';
  
  //'http://localhost:5000/api/noticia';
  
  constructor(private http: HttpClient) { }

  //chama o serviço de notícias utilizando o modelo especificado em _models

  getAllNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.baseURL);
  }

}
