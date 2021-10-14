import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize, ThumbnailsMode, GalleryRef } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavService } from '../_services/nav.service';


@Component({
  selector: 'app-museu',
  templateUrl: './museu.component.html',
  styleUrls: ['./museu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuseuComponent implements OnInit {

  items: GalleryItem[];
  galleryId = 'galeriaHistoria'
  
  constructor(public gallery: Gallery,
              public lightbox: Lightbox,
              public router: Router,
              public nav: NavService,
                ) { }
             
  ngOnInit() {
    this.nav.show();
      
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    galleryRef.addImage({
      src: 'assets/_img/museuGallery/historia/img1.png',
      thumb: 'assets/_img/museuGallery/historia/img1.png',
      title: 'Salas MNC em reforma, 1998'
    });
    galleryRef.addImage({
      src: 'assets/_img/museuGallery/historia/img2.png',
      thumb: 'assets/_img/museuGallery/historia/img2.png',
      title: 'Entrada Recepção Câmpus I – Universidade Feevale – reforma MNC 1998'
    });
    galleryRef.addImage({
      src: 'assets/_img/museuGallery/historia/img3.png',
      thumb: 'assets/_img/museuGallery/historia/img3.png',
      title: 'Autoridades presentes, da direita para a esquerda: Sr. José Airton dos Santos, Prof. Lauro Tischer, Sr. Carlos Gilberto Simon, Prof. Cleber Prodanov e Sr. Gilberto Steffens (1999)'
    });
    galleryRef.addImage({
      src: 'assets/_img/museuGallery/historia/img4.jpg',
      thumb: 'assets/_img/museuGallery/historia/img4.jpg',
      title: 'Na imagem, convidados circulam durante o evento de Inauguração do MNC (1999)'
    });
    galleryRef.addImage({
      src: 'assets/_img/museuGallery/historia/img5.jpg',
      thumb: 'assets/_img/museuGallery/historia/img5.jpg',
      title: 'ACERVO MNC – Bota com cadarço em couro ano de 1920'
    });
  /*
  
  this.items = this.imageData.map(item => new ImageItem({src: item.srcUrl, thumb: item.previewUrl}));

  // Get a lightbox gallery ref
  const lightboxRef = this.gallery.ref('lightbox');

  // Add custom gallery config to the lightbox (optional)
  lightboxRef.setConfig({
    imageSize: ImageSize.Cover,
    thumbPosition: ThumbnailsPosition.Top
  });

  // Load items into the lightbox gallery ref
  lightboxRef.load(this.items);
  */
  }
}