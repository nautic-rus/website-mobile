import { Component, OnInit } from '@angular/core';
import {VacancyManagerService} from '../../vacancy-manager.service';
import {ActivatedRoute} from '@angular/router';
import {TranslationService} from '../../../translation.service';
import {DialogService} from 'primeng/dynamicdialog';
import {Vacant} from '../vacant';
import {SendResumeComponent} from '../../send-resume/send-resume.component';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {

  vacancy: Vacant = this.v.vacancies[0];
  vacancyIndex = 0;

  constructor(private v: VacancyManagerService, private route: ActivatedRoute, public t: TranslationService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.v.event.subscribe(event => {
      if (event === 'updated'){
        const vacant = this.v.vacancies.find(x => x.indexPath === this.vacancyIndex);
        this.vacancy = vacant != null ? vacant : this.v.vacancies[0];
      }
    });
    this.route.queryParams.subscribe(params => {
      this.vacancyIndex = params.vacancy != null ? +params.vacancy : 0;
      const vacant = this.v.vacancies.find(x => x.indexPath === this.vacancyIndex);
      this.vacancy = vacant != null ? vacant : this.v.vacancies[0];
      console.log(this.vacancy);
    });
  }
  show() {
    this.dialogService.open(SendResumeComponent, {
      showHeader: false,
      modal: true,
      data: this.vacancy.name
    });
  }

}
