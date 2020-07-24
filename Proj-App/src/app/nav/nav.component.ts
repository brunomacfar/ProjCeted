
import { Component, OnInit } from '@angular/core';
import { DeactivateComponent } from '../_guards/navbar-deactivate.guard';
import { NavService } from '../_services/nav.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
 
  constructor( public nav: NavService,
               public router: Router) { }
  ngOnInit() {
  }

}
