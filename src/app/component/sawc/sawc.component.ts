import { Component, OnInit } from '@angular/core';
import {Image} from '../../image';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-sawc',
  templateUrl: './sawc.component.html',
  styleUrls: ['./sawc.component.css']
})
export class SawcComponent implements OnInit {

  constructor(private lb: Lightbox) { }

  imagePreview = false;
  imagePreviewSrc = '';
  imagePreviewStyle = {
    height: '10%'
  };
  pageNumber = 0;
  docNumber = 0;
  pageNumberChange = 0;
  docNumberChange = 0;

  album1 = [];
  album2 = [];

  ngOnInit(): void {
    for (let page = 1; page <= 3; page ++){
      this.album1.push(new Image('assets/doc' + '1' + '-page-' + page + '.jpg', '', 'assets/doc' + '1' + '-page-' + page + '.jpg'));
    }
    for (let page = 1; page <= 7; page ++){
      this.album2.push(new Image('assets/doc' + '2' + '-page-' + page + '.jpg', '', 'assets/doc' + '2' + '-page-' + page + '.jpg'));
    }
  }

  isHover(doc: number, page: number): boolean {
    return this.docNumber === doc && this.pageNumber === page;
  }
  setHover(doc: number, page: number): void{
    this.docNumber = doc;
    this.pageNumber = page;
  }
  resetHover(): void{
    this.docNumber = 0;
    this.pageNumber = 0;
  }
  showImage(doc: number, page: number): void {
    switch (doc){
      case 1: {
        this.lb.open(this.album1, page - 1);
        break;
      }
      case 2: {
        this.lb.open(this.album2, page - 1);
        break;
      }
      default: {
        break;
      }
    }
  }
}
