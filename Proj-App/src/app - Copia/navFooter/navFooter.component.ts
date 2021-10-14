import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../_services/nav.service';

@Component({
  selector: 'app-navFooter',
  templateUrl: './navFooter.component.html',
  styleUrls: ['./navFooter.component.css']
})
export class NavFooterComponent implements OnInit {

  constructor(public router: Router,
              public nav: NavService) { }

  ngOnInit() {
    
  }

}
