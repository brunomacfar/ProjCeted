import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
   
}
