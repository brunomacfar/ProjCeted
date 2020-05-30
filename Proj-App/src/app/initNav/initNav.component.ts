import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

@Component({
  selector: 'app-initNav',
  templateUrl: './initNav.component.html',
  styleUrls: ['./initNav.component.css']
})
export class InitNavComponent implements OnInit {

  private _opened = false;
  constructor(private toggleSidebar: SidebarModule ) { }

  ngOnInit() {
  }
  
  _toggleSidebar() {
    this._opened = !this._opened;
  }

}
