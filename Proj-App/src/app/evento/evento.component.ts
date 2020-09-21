import { Component, OnInit } from '@angular/core';
import { NavService } from '../_services/nav.service';
import { HttpClient, JsonpInterceptor } from "@angular/common/http";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  projects = [];

  constructor(private nav: NavService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
}