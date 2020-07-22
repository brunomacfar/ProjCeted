
import { Component, OnInit } from '@angular/core';
import { DeactivateComponent } from '../_guards/navbar-deactivate.guard';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DeactivateComponent {
  isDeactivated = true;
  constructor() { }

  ngOnInit() {
  }

  deactivateComponent(){
    
    return this.isDeactivated;
  }
}
