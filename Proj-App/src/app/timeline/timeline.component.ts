import { R3TargetBinder } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MuseuComponent } from '../museu/museu.component';

import { NavService } from '../_services/nav.service';

declare var $: any;


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  
  constructor(router: Router,
              public nav: NavService) {
    //var backgroundUrl= "/assets/_img/timeline/img1.jpg"; 
  }
  backgroundUrl= "assets/_img/timeline/img1.jpg";
    ngOnInit() {
      this.nav.show();

     }

  onClick() {
    $(".step01").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "0.5%");
    $(".content1").addClass("active").siblings().removeClass("active");
    this.backgroundUrl= "assets/_img/timeline/img1.jpg";

  }

  onClick1() {
    $(".step02").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "11.1%");
    $(".content2").addClass("active").siblings().removeClass("active");
    this.backgroundUrl= "assets/_img/timeline/img2.png";
    //$(".timeline-content").css("background-size", "cover");
    //$(".timeline-content").css("background-repeat", "no-repeat");


  }
  onClick2() {
    $(".step03").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "22.2%");
    $(".content3").addClass("active").siblings().removeClass("active");
    this.backgroundUrl= "assets/_img/timeline/img3.png";
     //$("#teste21").css("background-size", "cover");
     //$("#teste21").css("background-repeat", "no-repeat");

  }

  onClick3() {
    $(".step04").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "33.3%");
    $(".content4").addClass("active").siblings().removeClass("active");
    this.backgroundUrl= "assets/_img/timeline/img4.png";

  }

  onClick4() {
    $(".step05").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "44.4%");
    $(".content5").addClass("active").siblings().removeClass("active");
      this.backgroundUrl= "assets/_img/timeline/img5.png";

  }
  onClick5() {
    $(".step06").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "55.5%");
    $(".content6").addClass("active").siblings().removeClass("active");
      this.backgroundUrl= "assets/_img/timeline/img6.png";

  }
  onClick6() {
    $(".step07").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "66.6%");
    $(".content7").addClass("active").siblings().removeClass("active");
    // $("#teste21").css("background-size", "cover");
     //$("#teste21").css("background-repeat", "no-repeat");
      this.backgroundUrl= "assets/_img/timeline/img7.jpg";

  }
  onClick7() {
    $(".step08").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "77.7%");
    $(".content8").addClass("active").siblings().removeClass("active");
      this.backgroundUrl= "assets/_img/timeline/img8.jpg";

  }
  onClick8() {
    $(".step09").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "88.8%");
    $(".content9").addClass("active").siblings().removeClass("active");
      this.backgroundUrl= "assets/_img/timeline/img9.jpg";

  }
  onClick9() {
    $(".step10").addClass("active").siblings().removeClass("active");
    $("#line-progress").css("width", "100%");
    $(".content10").addClass("active").siblings().removeClass("active");
      this.backgroundUrl= "assets/_img/timeline/img10.jpg";

  }

}
