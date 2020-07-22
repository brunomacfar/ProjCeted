import { Component, OnInit, NgModule } from '@angular/core';
import { NavbarDeactivateGuard, DeactivateComponent } from '../_guards/navbar-deactivate.guard';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-initNav',
  templateUrl: './initNav.component.html',
  styleUrls: ['./initNav.component.css'],
  providers: [NavbarDeactivateGuard]
})

export class InitNavComponent implements OnInit  {
  
  deact: NavComponent;

  
   _opened: boolean = false;
  _dock: boolean = false;
  _closeOnClickOutside: boolean = true;
  _animate: boolean = true;
  showIndicator: boolean = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }
  
 ngOnInit(){
   this.deact.deactivateComponent();
 }
  

}
