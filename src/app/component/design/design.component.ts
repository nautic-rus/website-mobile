import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';
import {TranslationService} from '../../translation.service';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  images = [];
  galleryOptions: NgxGalleryOptions[] = [];
  galleryOptionsMobile: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private lb: Lightbox, public t: TranslationService) { }


  ngOnInit(): void {
    for (let x = 1; x < 17; x ++){
      this.images.push({src: 'assets/design/' + x + '.jpg', caption: '', thumb: 'assets/design/' + x + '_thumb.jpg'});
      this.galleryImages.push(
        {
          small: 'assets/design/' + x + '_thumb.jpg',
          medium: 'assets/design/' + x + '.jpg',
          big: 'assets/design/' + x + '.jpg'
        }
      );
    }
    this.galleryOptions = [
      {
        thumbnailsColumns: 5,
        imageAnimation: NgxGalleryAnimation.Slide,
        arrowNextIcon: 'fa fa-chevron-right',
        arrowPrevIcon: 'fa fa-chevron-left',
        closeIcon : 'fa fa-times',
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '100%',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      {
        breakpoint: 400,
        preview: false,
      }
    ];
    this.galleryOptionsMobile = [
      {
        thumbnailsColumns: 4,
        thumbnailsRows: 4,
        imageAnimation: NgxGalleryAnimation.Fade,
        thumbnailsSwipe: true,
        imageSwipe: true,
        previewSwipe: true,
        imageArrows: false,
        previewArrows: false,
        thumbnailsArrows: false,
        previewInfinityMove: true
      },
      {
        breakpoint: 500,
        width: 'auto',
        height: '500px',
        imagePercent: 100,
        thumbnailsPercent: 100,
        thumbnailsMargin: 5,
        thumbnailMargin: 5,
      },
      {
        breakpoint: 400,
        preview: false,
      }
    ];
  }

  openImage(ind: number): void {
    this.lb.open(this.images, ind);
  }
}
