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
        title: 'Livro MNC (2005)'
      });
      galleryRef.addImage({
        src: 'assets/_img/museuGallery/historia/img6.jpg',
        thumb: 'assets/_img/museuGallery/historia/img6.jpg',
        title: 'Evento realizado pelo MNC em parceria com Abicalçados - Abril de 2017'
      });
      galleryRef.addImage({
        src: 'assets/_img/museuGallery/historia/img7.jpg',
        thumb: 'assets/_img/museuGallery/historia/img7.jpg',
        title: 'Mestre e pesquisador Daniel Keller fazendo sua fala a respeito do MNC e sua ligação com a moda, à cultura e arte local – 2017.'
      });
      galleryRef.addImage({
        src: 'assets/_img/museuGallery/historia/img8.jpg',
        thumb: 'assets/_img/museuGallery/historia/img8.jpg',
        title: 'ACERVO MNC – Bota com cadarço em couro ano de 1920'
      });
      galleryRef.addImage({
        src: 'assets/_img/museuGallery/historia/img9.png',
        thumb: 'assets/_img/museuGallery/historia/img9.png',
        title: 'ACERVO MNC - Calçado Ruy Chaves com escama de peixe, 1971'
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


  const data = [
    { srcUrl: 'assets/_img/museuGallery/historia/img1.png',
      previewUrl: 'assets/_img/museuGallery/historia/img1.png',
      poster: "Este é um thumb para a foto 1"
    },
    {
      srcUrl: 'assets/_img/museuGallery/historia/img2.png',
      previewUrl: 'assets/_img/museuGallery/historia/img2.png',
      caption: "Este é um thumb para a foto 1"
    },
    {
      srcUrl: 'assets/_img/museuGallery/historia/img3.png',
      previewUrl: 'assets/_img/museuGallery/historia/img3.png'
    },
    {
      srcUrl: 'assets/_img/museuGallery/historia/img4.jpg',
      previewUrl: 'assets/_img/museuGallery/historia/img4.jpg'
    }
  ]