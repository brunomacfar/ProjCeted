import { Component, OnInit } from '@angular/core';
import { NavService } from '../_services/nav.service';
import { HttpClient } from "@angular/common/http";
import { Evento } from "../_models/Evento";
import { Router } from '@angular/router';
import { EventoService } from '../_services/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  
  eventosApp: Evento[];

  constructor(  private nav: NavService,
                private http: HttpClient,
                private eventoService: EventoService) { }

  ngOnInit(): void {
    this.getEventosApp();
  }

  getEventosApp(){
    this.eventoService.getEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventosApp = _eventos;
      }, error => {
        console.log(error);
      });
  }
}