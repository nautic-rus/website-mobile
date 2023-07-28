import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../../translation.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  constructor(public t: TranslationService) { }

  ngOnInit(): void {
  }

}
