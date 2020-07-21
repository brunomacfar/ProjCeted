import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
  
})

export class AgendaComponent implements OnInit {

  selectedDate: any;

  constructor() {  }



  ngOnInit() {
  }

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }

}
