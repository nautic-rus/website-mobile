import {Image} from '../../image';

export class Project {
  name: string;
  descName: string;
  img: string;
  thumb: string;
  video: string;
  fullVideo: string;
  description: string;
  images: Image[] = [];
  mainProps = [];
  props = [];
  subDescription1 = '';
  subDescription2 = '';
  subDetails = [];
  fishTypes = '';
  recycles = '';
  shipDrawImage = '';
  drawingImage = '';
  bookletRU = '';
  bookletEN = '';
  indexPath = '';

  constructor(name: string, descName: string, indexPath: string) {
    const path = 'assets/projects/' + indexPath + '/';
    this.indexPath = indexPath;
    this.name = name;
    this.descName = descName;
    this.img = path + 'image.jpg';
    this.thumb = path + 'image_thumb.jpg';
    this.video = path + 'video.mp4';
    this.fullVideo = path + 'video_full.mp4';
    this.shipDrawImage = path + 'image-draw.jpg';
    this.drawingImage = path + 'drawing.jpg';
    this.bookletRU = path + 'booklet-ru.pdf';
    this.bookletEN = path + 'booklet-en.pdf';
    for (let x = 1; x <= 4; x++){
      this.images.push(new Image(path + 'image-' + x + '.jpg', '', path + 'image-' + x + '-thumb.jpg'));
    }
  }
  getNameUpper(): string{
    return this.name.toUpperCase();
  }
  getNameDefault(): string{
    return this.name;
  }
  getDescNameUpper(): string{
    return this.descName.toUpperCase();
  }
}
