import { Component, OnInit, NgModule } from '@angular/core';
import { NavbarDeactivateGuard, DeactivateComponent } from '../_guards/navbar-deactivate.guard';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';
import { NavService } from '../_services/nav.service';
import { NgStyle } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-initNav',
  templateUrl: './initNav.component.html',
  styleUrls: ['./initNav.component.css']
})

export class InitNavComponent implements OnInit  {
  
  constructor(public nav: NavService,
              public router: Router){
  }
  
  counter = 0;
  clickMe(){
  this.counter++;
  console.log(this.counter);

  if( this.counter % 2 == 0 ) {
      document.getElementById("mySidenav").style.width = "5.6%";
  } else {
      document.getElementById("mySidenav").style.width = "50%";
    }
  }
  
 ngOnInit(){
  this.nav.hide(); 
 }

}
