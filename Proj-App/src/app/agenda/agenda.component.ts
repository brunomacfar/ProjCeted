import { Component, OnInit } from '@angular/core';
import { NavService } from '../_services/nav.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
  
})

export class AgendaComponent implements OnInit {

  selectedDate: any;

  constructor(public nav: NavService) {  }



  ngOnInit() {
    this.nav.show();
  }

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }

}
