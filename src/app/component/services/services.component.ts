import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../../translation.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  content = [];
  contentClick(content: string): void{
    this.content.includes(content) ? this.content.splice(this.content.indexOf(content), 1) : this.content.push(content);
  }

  constructor(public t: TranslationService) { }

  ngOnInit(): void {
  }

}
