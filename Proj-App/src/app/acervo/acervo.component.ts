import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Gallery, GalleryItem, GalleryRef } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';



// Documentação sobre o componente de Galeria que se encontra no Acervo https://ngx-gallery.netlify.app/#/advanced


@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.component.html',
  
  styleUrls: ['./acervo.component.css',],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcervoComponent implements OnInit {
 
  items: GalleryItem[];
  galleryId = 'galeriaHistoria'

  constructor(public gallery: Gallery,
              public lightbox: Lightbox) { }

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    galleryRef.addImage({
      src: 'assets/acervo/464ac_.png',
      thumb: 'assets/acervo/464ac_.png',
      title: '464 a. C. – RÉPLICA DE SANDÁLIA GRECO-ROMANA SEC. V AC'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1115.png',
      thumb: 'assets/acervo/1115.png',
      title: '1115 – RÉPLICA DE CALÇADO SÉC XII'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1498.png',
      thumb: 'assets/acervo/1498.png',
      title: '1498 – RÉPLICA DE TAMANCO DO SÉC XIV E XV'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1501.png',
      thumb: 'assets/acervo/1501.png',
      title: '1501 – RÉPLICA DE SANDÁLIA DO SÉC XVI'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1890.png',
      thumb: 'assets/acervo/1890.png',
      title: '1890 – SAPATO SEM DEFINIÇÃO DE PÉ DIREITO E ESQUERDO'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1915.png',
      thumb: 'assets/acervo/1915.png',
      title: '1915 – (DÉCADA DE 1910) CALÇADO ORIGINAL. AINDA NÃO POSSUI DEFINIÇÃO DE PÉS'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1922.png',
      thumb: 'assets/acervo/1922.png',
      title: '1922 – (DÉCADA DE 1920) CALÇADOS MINERVA: SAPATO MASCULINO COM BICO FINO, COM DETALHE NA COR MARROM.'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1937.png',
      thumb: 'assets/acervo/1937.png',
      title: '1937 – DÉCADA DE 1930 SAPATO DE SALTO COM DETALHE VAZADO NA GÁSPEA – MODELO INGLÊS EM PELICA.'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1940.png',
      thumb: 'assets/acervo/1940.png',
      title: '1940 – DÉCADA DE 1940 CASA YANKE: SAPATO DE SALTO GROSSO COM PULSEIRA NO TORNOZELO (FETICHE DA ÉPOCA).'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1954.png',
      thumb: 'assets/acervo/1954.png',
      title: '1954 – DÉCADA 1950 SAPATO FEMININO DE SALTO EM CAMURÇA COM APLICAÇÃO DE FOLHAS DOURADAS E DEBRUM DOURADO.'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1968.png',
      thumb: 'assets/acervo/1968.png',
      title: '1968 – DÉCADA DE 1960- RUY CHAVES: SAPATO FEMININO COM SALTO EM FERRO FUNDIDO E VAZADO. FLOR EM CIMA DA GÁSPEA'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1970.png',
      thumb: 'assets/acervo/1970.png',
      title: '1970 – DÉCADA DE 1970 ESTILISTA: JOSÉ MARIA CARRASCO MENNA SAPATO MASCULINO MODELO INGLÊS BICOLOR. MARROM E BEGE.'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1983.png',
      thumb: 'assets/acervo/1983.png',
      title: '1983 – DÉCADA DE 1980 - CZARINA: SAPATO FEMINO DE FESTA COM DETALHE EM FALSO VIRADO DA TIRA DA GÁSPEA. ESTILISTA: CARLOS GILBERTO SIMON.'
    });
    galleryRef.addImage({
      src: 'assets/acervo/1992.png',
      thumb: 'assets/acervo/1992.png',
      title: '1992 – JOTTA SYBBALENA PARA AREZZO: COLEÇÃO: RICH CLUB, POSSUI UM ZIPER NA PARTE FRONTAL E FIVELA NAS DUAS LATERAIS. NA PARTE FRONTAL DO SOLADO POSSUI ESCRITO "RICH CLUB" EM METAL.'
    });
    galleryRef.addImage({
      src: 'assets/acervo/2000.png',
      thumb: 'assets/acervo/2000.png',
      title: '2000 – LINO VILLAVENTURA: FEITO PARA O MORUMBI FASHION JUNTO COM GILBERTO SIMON.'
    });
   
  }
onClick(){
  document.getElementById("imgItem").focus();
}

 ngCarregaItens(){
   
  
 }
}
