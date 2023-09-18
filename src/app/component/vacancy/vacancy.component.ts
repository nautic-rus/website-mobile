import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../../translation.service';
import { Router} from '@angular/router';

export interface Vacancy{
  name: string;
  salary: string;
  experience: string;
  city: string;
  metro: string;
}

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  vacancies: Vacancy[] = [];
  vacanciesRu: Vacancy[] = [
    {name: 'Ведущий инженер-конструктор-электрик', salary: 'от 80000 на руки', experience: 'Опыт работы более 6 лет', city: 'г. Санкт-Петербург', metro: 'Автово'},
    {name: 'Инженер-конструктор по корпусу', salary: 'от 80000 на руки', experience: 'Опыт работы от 3 лет', city: 'г. Санкт-Петербург', metro: 'Автово'},
    {name: 'Инженер-конструктор по корпусу на верфь', salary: 'от 100000 на руки', experience: 'Опыт работы от 3 лет', city: 'г. Отрадное (ЛО)', metro: 'Рыбацкое'},
    {name: 'Инженер-конструктор отдела судовых устройств', salary: 'от 100000 на руки', experience: 'Опыт работы от 1 года', city: 'г. Санкт-Петербург', metro: 'Автово'},
    {name: 'Инженер-конструктор отдела судовых устройств на верфь', salary: 'от 100000 на руки', experience: 'Опыт работы от 1 года', city: 'г. Отрадное (ЛО)', metro: 'Рыбацкое'},
    {name: 'Ведущий инженер расчетчик корпус', salary: 'от 120000 на руки', experience: 'Опыт работы от 3 лет', city: 'г. Санкт-Петербург', metro: 'Автово'},
    {name: 'Инженер-конструктор судовых систем и систем энергетических установок', salary: 'от 80000 на руки', experience: 'Опыт работы от 1 года', city: 'г. Санкт-Петербург', metro: 'Автово'},
    {name: 'Инженер-конструктор судовых систем и систем энергетических установок', salary: 'от 100000 на руки', experience: 'Опыт работы от 1 года', city: 'г. Отрадное (ЛО)', metro: 'Рыбацкое'},
  ];
  vacanciesEn: Vacancy[] = [
    {name: 'Leading design engineer-electrician', salary: 'от 80000 на руки', experience: 'Work experience of more than 6 years', city: 'St. Petersburg', metro: 'Avtovo'},
    {name: 'Design engineer for the hull', salary: 'от 80000 на руки', experience: 'Work experience of more than 3 years', city: 'St. Petersburg', metro: 'Avtovo'},
    {name: 'Design engineer for the hull at the shipyard', salary: 'от 100000 на руки', experience: 'Work experience of more than 3 years', city: 'Otradnoye', metro: 'Rybatskoe'},
    {name: 'Design Engineer of the Devices Department', salary: 'от 100000 на руки', experience: 'Work experience of more than 1 years', city: 'St. Petersburg', metro: 'Avtovo'},
    {name: 'Design Engineer of the Devices Department at the shipyard', salary: 'от 100000 на руки', experience: 'Work experience of more than 1 years', city: 'Otradnoye', metro: 'Rybatskoe'},
    {name: 'The lead engineer is a calculator for the hull', salary: 'от 120000 на руки', experience: 'Work experience of more than 3 years', city: 'St. Petersburg', metro: 'Avtovo'},
    {name: 'Engineer-designer of ship systems and power plant systems', salary: 'от 80000 на руки', experience: 'Work experience of more than 1 years', city: 'St. Petersburg', metro: 'Avtovo'},
    {name: 'Engineer-designer of ship systems and power plant systems', salary: 'от 100000 на руки', experience: 'Work experience of more than 1 years', city: 'Otradnoye', metro: 'Rybatskoe'},
  ];
  hoveringVacancy = -1;

  constructor(public t: TranslationService, private router: Router) {
    this.vacancies = this.vacanciesRu;
    if (t.lang === 'EN'){
      this.vacancies = this.vacanciesEn;
    }
    this.t.event.subscribe(res => {
      this.vacancies = this.vacanciesRu;
      if (t.lang === 'EN'){
        this.vacancies = this.vacanciesEn;
      }
    });
  }

  ngOnInit(): void {
  }
  openVacancy(vacancy: number): void {
    this.router.navigate(['vacancy-details'], { queryParams: {vacancy}});
  }
}
