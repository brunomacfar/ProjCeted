import { Component, OnInit } from '@angular/core';
import { TimelineElement } from '../horizontal-timeline/timeline-element';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: [ './timeline.component.css' ]
})
export class TimelineComponent implements OnInit {

  name = 'Timeline';
  content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;
  content2 = `TEste ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae 
  ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, 
  ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam 
  quisquam, quae, temporibus dolores porro doloribus.`;


  timeline: TimelineElement[] = [];

  constructor( ) { }

  ngOnInit(){
    this.timeline = [];
    setTimeout(() => { // simulate delay 
      this.timeline = [
    { caption: '16 Jan', date: new Date(2014, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
    { caption: '28 Feb', date: new Date(2014, 2, 28), title: 'Exemplo 1', content: this.content2 },
    { caption: '20 Mar', date: new Date(2014, 3, 20), title: 'Exemplo 2', content: this.content },
    { caption: '20 May', date: new Date(2014, 5, 20), title: 'Exemplo 3', content: this.content },
    { caption: '09 Jul', date: new Date(2014, 7, 9),  title: 'Exemplo 4', content: this.content },
    { caption: '30 Aug', date: new Date(2014, 8, 29), title: 'Status#5', content: this.content },
    { caption: '15 Sep', date: new Date(2014, 9, 15), title: 'Status#6', content: this.content },
    { caption: '01 Nov', date: new Date(2014, 11, 1), title: 'Status#7', content: this.content },
    { caption: '10 Dec', date: new Date(2014, 12, 10), title: 'Status#8', content: this.content },
    { caption: '29 Jan', date: new Date(2015, 1, 19), title: 'Status#9', content: this.content },
    { caption: '3 Mar', date: new Date(2015, 3, 3), title: 'Status#9', content: this.content },
    ];
    }, 2000);
  }

}
