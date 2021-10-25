import { Component, ChangeDetectionStrategy, LOCALE_ID, OnInit, PipeTransform } from '@angular/core';
import { NavService } from '../_services/nav.service';
import { HttpClient } from "@angular/common/http";
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize, GalleryRef } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class AgendaComponent implements OnInit  {
  
  items: GalleryItem[];
  galleryId = 'galeriaHistoria'
  
  
  
  constructor(private nav: NavService,
              private http: HttpClient,
              public gallery: Gallery,
              public lightbox: Lightbox) {  }

 
  ngOnInit() {

      this.nav.hide();
  }
}
