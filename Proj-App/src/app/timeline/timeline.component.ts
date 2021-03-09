import { R3TargetBinder } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MuseuComponent } from '../museu/museu.component';

declare var $: any;


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  
  constructor(router: Router) {
    var backgroundUrl= "/assets/_img/timeline/timeline1.png"; 
  }
  backgroundUrl= "/assets/_img/timeline/timeline1.png";
    ngOnInit() { }

  onClick() {
    $(".step01").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "0.5%");
    $(".content1").addClass("active").siblings().removeClass("active");
  }

  onClick1() {
    $(".step02").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "25%");
    $(".content2").addClass("active").siblings().removeClass("active");

  }
  onClick2() {
    $(".step03").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "50%");
    $(".content3").addClass("active").siblings().removeClass("active");
  }

  onClick3() {
    $(".step04").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "75%");
    $(".content4").addClass("active").siblings().removeClass("active");
  }

  onClick4() {
    $(".step05").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "100%");
    $(".content5").addClass("active").siblings().removeClass("active");
  }

}
