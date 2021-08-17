import { Component, LOCALE_ID, OnInit, PipeTransform } from '@angular/core';
import { NavService } from '../_services/nav.service';
import { HttpClient } from "@angular/common/http";
import { Evento } from "../_models/Evento";
import { EventoService } from '../_services/evento.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
  
})

export class AgendaComponent implements OnInit  {
  
  eventosApp: Evento[];
  eventoApp: Evento;
  selectedDate: any;
  
  
  constructor(private nav: NavService,
              private http: HttpClient,
              private eventoService: EventoService) {  }

 
  ngOnInit() {
    this.nav.show();
    this.getEventosApp();
  }

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }

  getEventosApp(){
    this.eventoService.getAllEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventosApp = _eventos;
        console.log(_eventos);
      }, error => {
        console.log(error);
      });
  }

}
