export class Image {
  src: string;
  caption: string;
  thumb: string;

  constructor(src: string, caption: string, thumb: string) {
    this.src = src;
    this.caption = caption;
    this.thumb = thumb;
  }
}
