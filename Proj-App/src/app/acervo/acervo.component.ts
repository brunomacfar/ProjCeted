import { Component, OnInit } from '@angular/core';
import { NavService } from '../_services/nav.service';

@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.component.html',
  styleUrls: ['./acervo.component.css']
})
export class AcervoComponent implements OnInit {

  constructor( public nav: NavService
    ) { }

  ngOnInit() {
    this.nav.show();
  }

}
