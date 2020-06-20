import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-initNav',
  templateUrl: './initNav.component.html',
  styleUrls: ['./initNav.component.css']
})
export class InitNavComponent {

  _opened: boolean = false;
  _dock: boolean = false;
  _closeOnClickOutside: boolean = true;
  _animate: boolean = true;
  showIndicator: boolean = false;

  _toggleSidebar() {
    this._opened = !this._opened;
  }

}
