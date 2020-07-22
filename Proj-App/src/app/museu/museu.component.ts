import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize, ThumbnailsMode } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { map } from 'rxjs/operators';
import { HorizontalTimelineComponent } from '../horizontal-timeline/horizontal-timeline.component';


@Component({
  selector: 'app-museu',
  templateUrl: './museu.component.html',
  styleUrls: ['./museu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuseuComponent implements OnInit {

  items: GalleryItem[];
  imageData = data;

  constructor(public gallery: Gallery,
              public lightbox: Lightbox,

                ) { }

  ngOnInit() {
    /** Basic Gallery Example */


    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
      thumbMode: ThumbnailsMode.Free,
      counter: false,
      autoPlay: true
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);

  }
}

const data = [
  {
    srcUrl: '/assets/_img/museuGallery/img1.png',
    previewUrl: '/assets/_img/museuGallery/img1.png'
  },
  {
    srcUrl: '/assets/_img/museuGallery/img2.png',
    previewUrl: '/assets/_img/museuGallery/img2.png'
  },
  {
    srcUrl: '/assets/_img/museuGallery/img3.png',
    previewUrl: '/assets/_img/museuGallery/img3.png'
  },
  {
    srcUrl: '/assets/_img/museuGallery/img4.png',
    previewUrl: '/assets/_img/museuGallery/img4.png'
  },
  {
    srcUrl: '/assets/_img/museuGallery/img5.png',
    previewUrl: '/assets/_img/museuGallery/img5.png'
  }
];