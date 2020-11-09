import { Component, OnInit } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser"; 
import { HttpClient } from "@angular/common/http";
import { NavService } from '../_services/nav.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  projects = [];
 
  constructor(private http: HttpClient,
              private nav: NavService) { }

  ngOnInit() :void {
    this.nav.hide(); 
    this.http.get('http://ceted.feevale.br/museudocalcado/?rest_route=/wp/v2/posts/&slug=conheca-o-decreto').subscribe(data => {
        for(let key in data){
          if(data.hasOwnProperty(key)){
            this.projects.push(data[key]);
          }
        }
        console.log(this.projects)
    })
  }
}
