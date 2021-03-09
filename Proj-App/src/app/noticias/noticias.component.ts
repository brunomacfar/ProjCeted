import { Component, OnInit } from '@angular/core';
import { Evento } from '../_models/Evento';
import { EventoService } from '../_services/evento.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  titulo = 'Eventos';
  eventos: Evento[];
  evento: Evento;

  constructor( private eventoService: EventoService
             , private fb: FormBuilder
             , private toastr: ToastrService) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    
    this.eventoService.getAllEventos().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        console.log(this.eventos);
      }, error => {
        this.toastr.error(`Erro ao tentar Carregar eventos: ${error}`);
      });
  }
}
