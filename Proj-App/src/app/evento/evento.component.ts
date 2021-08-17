import { Component, OnInit, TemplateRef  } from '@angular/core';
import { NavService } from '../_services/nav.service';
import { HttpClient } from "@angular/common/http";
import { Evento } from "../_models/Evento";
import { Router } from '@angular/router';
import { EventoService } from '../_services/evento.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  
  public eventosApp: Evento[];
  public eventoApp: Evento;
  
  constructor(  private nav: NavService,
                private eventoService: EventoService,
                private http: HttpClient ) { }

  ngOnInit(): void {
    this.getEventosApp();
  }  
  
  getEventosApp(){
    this.eventoService.getAllEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventosApp = _eventos;
      }, error => {
        console.log(error);
      });
  }
}