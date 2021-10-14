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

export class InitNavComponent implements OnInit {
  showFiller = false;
  events: string[] = [];
  opened: boolean;
  constructor(public nav: NavService,
              public router: Router) {
  }




  
  ngOnInit() {
    this.nav.hide();
  }

}
