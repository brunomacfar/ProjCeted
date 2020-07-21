import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../_services/navbar.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor( public nav: NavbarService) {}

}
