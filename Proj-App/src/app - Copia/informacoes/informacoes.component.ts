import { Component, OnInit } from '@angular/core';
import { NavService } from '../_services/nav.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit {

  constructor(public nav: NavService) { }

  ngOnInit() {
    this.nav.show();
  }

}
