import { Component, OnInit } from '@angular/core';
import { Evento } from '../_models/Evento';
import { EventoService } from '../_services/evento.service';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NoticiaService } from '../_services/noticia.service';
import { Noticia } from '../_models/Noticia';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { NavService } from '../_services/nav.service';




@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  titulo = 'Noticias';
  noticiasApp: Noticia[];
  noticiaApp: Noticia;



  constructor( private nav: NavService,
               private noticiaService: NoticiaService,
               private http: HttpClient,
               private toastr: ToastrService,
               private sanitizer:DomSanitizer ) { }

  ngOnInit() {
    this.getNoticiasApp();
    this.nav.show();
  }

  getNoticiasApp() {
    this.noticiaService.getAllNoticias().subscribe(
      (_noticias: Noticia[]) => {      
        this.noticiasApp = _noticias;        
        console.log(this.noticiasApp);
      }, error => {
        console.log(error);
        this.toastr.error(`Erro ao tentar Carregar Noticias: ${error}`);
      });
  }
}
