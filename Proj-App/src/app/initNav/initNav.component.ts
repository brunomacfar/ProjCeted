import { Component, OnInit, NgModule } from '@angular/core';
import { NavbarDeactivateGuard, DeactivateComponent } from '../_guards/navbar-deactivate.guard';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';
import { NavService } from '../_services/nav.service';

@Component({
  selector: 'app-initNav',
  templateUrl: './initNav.component.html',
  styleUrls: ['./initNav.component.css']
})

export class InitNavComponent implements OnInit  {
  
  constructor(public nav: NavService,
              public router: Router){
  }

   _opened: boolean = false;
  _dock: boolean = false;
  _closeOnClickOutside: boolean = true;
  _animate: boolean = true;
  showIndicator: boolean = false;

  _toggleSidebar() {
    this._opened = !this._opened; 
  }
  
 ngOnInit(){
  this.nav.hide(); 
 }
  

}
