import {EventEmitter, Injectable} from '@angular/core';
import {TranslationService} from '../translation.service';
import {Vacant} from './vacancy/vacant';

@Injectable({
  providedIn: 'root'
})
export class VacancyManagerService {
  vacancies: Vacant[] = [];
  event = new EventEmitter();
  constructor(public t: TranslationService) {
    this.fillVacancies();
    this.t.event.subscribe(event => {
      if (event === 'langChanged'){
        this.fillVacancies();
      }
    });
  }

  fillVacancies(): void{
    let vacancyCounter = 0;
    if (this.t.lang === 'RU'){
      this.vacancies[vacancyCounter] = new Vacant('Ведущий инженер-конструктор-электрик');
      this.vacancies[vacancyCounter].salary = 'от 100 000₽ на руки';
      this.vacancies[vacancyCounter].experience = 'более 6 лет';
      this.vacancies[vacancyCounter].responsibilities = ['— Разработка и согласование ПДСП и РКД (радиосвязь, навигация, автоматизация и сигнализация) с РМРС, верфью и заказчиком.'];
      this.vacancies[vacancyCounter].requirements = ['— Высшее техническое образование;', '— Опыт работы в конструкторских организациях на должностях 1 категорий или ведущего конструктора;', '— Опыт работы с РМРС;', '— Знание Правил РМРС;', '— Уверенное владение AutoCAD.' ];
      this.vacancies[vacancyCounter].conditions = ['— График работы 5/2;', '— Трудоустройство по Трудовому Кодексу, «белая» заработная плата;', '— Оплачиваемый отпуск 28 календарных дней, ДМС;', '— Гибкий график работы;'];
      this.vacancies[vacancyCounter].office = '— Комфортный офис рядом с ';
      this.vacancies[vacancyCounter].metro = 'м. Автово.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Инженер-конструктор по корпусу');
      this.vacancies[vacancyCounter].salary = 'от 80 000₽ на руки';
      this.vacancies[vacancyCounter].experience = 'от 3 лет';
      this.vacancies[vacancyCounter].responsibilities = ['— Проектирование корпусных конструкций рыболовных судов;', '— Разработка документации на стадии ПДСП, РКД, ЭД и ПСД;', '— Моделирование корпусных конструкций в САПР(Foran).'];
      this.vacancies[vacancyCounter].requirements = ['— Опыт работы в судостроении обязателен;', '— Опыт работы в конструкторских организациях в должности ведущего инженера или инженера-конструктора 1,2 категории;', '— Опыт проектирования в САПР Foran желательно;', '— Уверенное владение AutoCAD;', '— Коммуникабельность;', '— Ответственность.',  ];
      this.vacancies[vacancyCounter].conditions = ['— График работы 5/2;', '— Трудоустройство по Трудовому Кодексу, «белая» заработная плата;', '— Оплачиваемый отпуск 28 календарных дней, ДМС;', '— Испытательный срок 3 мес;', '— Интересные задачи, возможность профессионального развития и карьерного роста;', '— Гибкий график работы;'];
      this.vacancies[vacancyCounter].office = '— Комфортный офис рядом с ';
      this.vacancies[vacancyCounter].metro = 'м. Автово.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Инженер-конструктор по корпусу на верфь');
      this.vacancies[vacancyCounter].salary = 'от 100 000₽ на руки';
      this.vacancies[vacancyCounter].experience = 'от 3 лет';
      this.vacancies[vacancyCounter].responsibilities = ['— Проектирование корпусных конструкций рыболовных судов;', '— Разработка документации на стадии ПДСП, РКД, ЭД и ПСД;', '— Моделирование корпусных конструкций в САПР(Foran).'];
      this.vacancies[vacancyCounter].requirements = ['— Высшее техническое образование в области судостроения', '— Опыт работы в судостроении обязателен;', '— Опыт работы в конструкторских организациях в должности ведущего инженера или инженера-конструктора 1,2 категории;', '— Опыт проектирования в САПР Foran желательно;', '— Уверенное владение AutoCAD;', '— Коммуникабельность;', '— Ответственность.',  ];
      this.vacancies[vacancyCounter].conditions = ['— График работы 5/2;', '— Трудоустройство по Трудовому Кодексу, «белая» заработная плата;', '— Оплачиваемый отпуск 28 календарных дней, ДМС;', '— Испытательный срок 3 мес;', '— Интересные задачи, возможность профессионального развития и карьерного роста;', '— Гибкий график работы;'];
      this.vacancies[vacancyCounter].office = '— Работа на судостроительном заводе ПЕЛЛА-СТАПЕЛЬ ';
      this.vacancies[vacancyCounter].metro = 'м. Рыбацкое.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Инженер-конструктор отдела судовых устройств');
      this.vacancies[vacancyCounter].salary = 'от 80 000₽ на руки';
      this.vacancies[vacancyCounter].experience = 'от 1 года';
      this.vacancies[vacancyCounter].responsibilities = ['— Подбор и размещение судовых устройств в соответствии с параметрами судна;', '— Выполнение расчетов подтверждающих требуемые характеристики оборудования;', '— Разработка сборочных и детальных чертежей судовых устройств;', '— Составление контрактных спецификаций и технических требований;', '— Согласование поставленного оборудования с надзорными органами;', '— Разработка эксплуатационной и приемо-сдаточной документации;'];
      this.vacancies[vacancyCounter].requirements = ['— Опыт самостоятельной разработки судового или нестандартного оборудования;', '— Современный подход к проектирование конструкций;', '— Уверенное владение AutoCAD, Solid, желательно Foran;', '— Коммуникабельность;', '— Ответственность;', '— Стрессоустойчивость.'];
      this.vacancies[vacancyCounter].conditions = ['— График работы 5/2;', '— Трудоустройство по Трудовому Кодексу, «белая» заработная плата;', '— Оплачиваемый отпуск 28 календарных дней, ДМС;', '— Испытательный срок 3 мес;', '— Интересные задачи, возможность профессионального развития и карьерного роста;', '— Гибкий график работы;'];
      this.vacancies[vacancyCounter].office = '— Комфортный офис рядом с ';
      this.vacancies[vacancyCounter].metro = 'м. Автово.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Инженер-конструктор отдела судовых устройств на верфь');
      this.vacancies[vacancyCounter].salary = 'от 80 000₽ на руки';
      this.vacancies[vacancyCounter].experience = 'от 1 года';
      this.vacancies[vacancyCounter].responsibilities = ['— Подбор и размещение судовых устройств в соответствии с параметрами судна;', '— Выполнение расчетов подтверждающих требуемые характеристики оборудования;', '— Разработка сборочных и детальных чертежей судовых устройств;', '— Составление контрактных спецификаций и технических требований;', '— Согласование поставленного оборудования с надзорными органами;', '— Разработка эксплуатационной и приемо-сдаточной документации;'];
      this.vacancies[vacancyCounter].requirements = ['— Опыт самостоятельной разработки судового или нестандартного оборудования;', '— Современный подход к проектирование конструкций;', '— Уверенное владение AutoCAD, Solid, желательно Foran;', '— Коммуникабельность;', '— Ответственность;', '— Стрессоустойчивость.'];
      this.vacancies[vacancyCounter].conditions = ['— График работы 5/2;', '— Трудоустройство по Трудовому Кодексу, «белая» заработная плата;', '— Оплачиваемый отпуск 28 календарных дней, ДМС;', '— Испытательный срок 3 мес;', '— Интересные задачи, возможность профессионального развития и карьерного роста;', '— Гибкий график работы;'];
      this.vacancies[vacancyCounter].office = '— Работа на судостроительном заводе ПЕЛЛА-СТАПЕЛЬ ';
      this.vacancies[vacancyCounter].metro = 'м. Рыбацкое.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Ведущий инженер расчетчик по корпусу');
      this.vacancies[vacancyCounter].salary = 'Заработная плата по результатам собеседования';
      this.vacancies[vacancyCounter].experience = 'от 3 лет';
      this.vacancies[vacancyCounter].responsibilities = ['— Расчеты общей и местной прочности корпусных конструкций, фундаментов и т.п. (Ansys);', '— Работа по одному или нескольким проектам рыболовных судов;', '— Согласование документации в РМРС.'];
      this.vacancies[vacancyCounter].requirements = ['— Высшее техническое образование в области судостроения;', '— Знание правил РМРС;', '— Опыт работы в судостроении обязателен;', '— Опыт работы в конструкторских организациях в должности инженера-конструктора 1,2 категории/ведущего инженера-конструктора;', '— Современный подход к проектированию конструкций.'];
      this.vacancies[vacancyCounter].conditions = ['— График работы 5/2;', '— Трудоустройство по Трудовому Кодексу, «белая» заработная плата;', '— Оплачиваемый отпуск 28 календарных дней, ДМС;', '— Испытательный срок 3 мес;', '— Интересные задачи, возможность профессионального развития и карьерного роста;', '— Гибкий график работы;'];
      this.vacancies[vacancyCounter].office = '— Комфортный офис рядом с ';
      this.vacancies[vacancyCounter].metro = 'м. Автово.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Инженер-конструктор судовых систем и систем энергетических установок');
      this.vacancies[vacancyCounter].salary = 'от 80 000₽ на руки';
      this.vacancies[vacancyCounter].experience = 'от 1 года';
      this.vacancies[vacancyCounter].responsibilities = ['— Проектирование судовых систем рыболовных судов;', '— Разработка документации на стадии ПДСП, РКД, ЭД и ПСД;', '— Подбор оборудования, арматуры и фитингов размещение оборудования;', '— Моделирование систем трубопроводов в САПР(Foran).' ];
      this.vacancies[vacancyCounter].requirements = ['— Высшее техническое образование в области судостроения;', '— Знание правил РМРС;', '— Опыт работы в судостроении обязателен;', '— Опыт работы в конструкторских организациях в должности инженера-конструктора 1,2 категории/ведущего инженера-конструктора;', '— Современный подход к проектированию конструкций;', '— Коммуникабельность;', '— Ответственность;', '— Стрессоустойчивость.'];
      this.vacancies[vacancyCounter].conditions = ['— График работы 5/2;', '— Трудоустройство по Трудовому Кодексу, «белая» заработная плата;', '— Оплачиваемый отпуск 28 календарных дней, ДМС;', '— Испытательный срок 3 мес;', '— Интересные задачи, возможность профессионального развития и карьерного роста;', '— Гибкий график работы;'];
      this.vacancies[vacancyCounter].office = '— Комфортный офис рядом с ';
      this.vacancies[vacancyCounter].metro = 'м. Автово.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Инженер-конструктор судовых систем и систем энергетических установок');
      this.vacancies[vacancyCounter].salary = 'от 80 000₽ на руки';
      this.vacancies[vacancyCounter].experience = 'от 1 года';
      this.vacancies[vacancyCounter].responsibilities = ['— Проектирование судовых систем рыболовных судов;', '— Разработка документации на стадии ПДСП, РКД, ЭД и ПСД;', '— Подбор оборудования, арматуры и фитингов размещение оборудования;', '— Моделирование систем трубопроводов в САПР(Foran).' ];
      this.vacancies[vacancyCounter].requirements = ['— Высшее техническое образование в области судостроения;', '— Знание правил РМРС;', '— Опыт работы в судостроении обязателен;', '— Опыт работы в конструкторских организациях в должности инженера-конструктора 1,2 категории/ведущего инженера-конструктора;', '— Современный подход к проектированию конструкций;', '— Коммуникабельность;', '— Ответственность;', '— Стрессоустойчивость.'];
      this.vacancies[vacancyCounter].conditions = ['— График работы 5/2;', '— Трудоустройство по Трудовому Кодексу, «белая» заработная плата;', '— Оплачиваемый отпуск 28 календарных дней, ДМС;', '— Испытательный срок 3 мес;', '— Интересные задачи, возможность профессионального развития и карьерного роста;', '— Гибкий график работы;'];
      this.vacancies[vacancyCounter].office = '— Работа на судостроительном заводе ПЕЛЛА-СТАПЕЛЬ ';
      this.vacancies[vacancyCounter].metro = 'м. Рыбацкое.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

    }
    else {
      this.vacancies[vacancyCounter] = new Vacant('Leading design engineer-electrician');
      this.vacancies[vacancyCounter].salary = 'from 100,000₽';
      this.vacancies[vacancyCounter].experience = 'more than 6 years';
      this.vacancies[vacancyCounter].responsibilities = ['— Development and coordination of PSP and RCD (radio communication, navigation, automation and alarm) with RMRS, shipyard and customer.'];
      this.vacancies[vacancyCounter].requirements = ['— Higher technical education;', '— Work experience in design organizations in positions of category 1 or lead designer;', '— Experience with RMRS;', '— Knowledge of RMRS Rules;', '— Confident ownership of AutoCAD.' ];
      this.vacancies[vacancyCounter].conditions = ['— Work schedule 5/2;', '— Employment under the Labor Code, "white" wages', '— Paid leave of 28 calendar days, VMI;', '— Flexible working hours;'];
      this.vacancies[vacancyCounter].office = '— Comfortable office near ';
      this.vacancies[vacancyCounter].metro = 'Avtovo metro station.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Design engineer for the hull');
      this.vacancies[vacancyCounter].salary = 'from 80,000₽';
      this.vacancies[vacancyCounter].experience = 'more than 3 years';
      this.vacancies[vacancyCounter].responsibilities = ['— Design of hull structures of fishing vessels;', '— Development of documentation at the stage of SDSP, RKD, ED and PSD;', '— Modeling of hull structures in CAD (Foran).'];
      this.vacancies[vacancyCounter].requirements = ['— Work experience in shipbuilding is required;', '— Work experience in design organizations as a leading engineer or design engineer of the 1,2 category;', '— Foran CAD design experience is desirable;', '— Confident ownership of AutoCAD;', '— Communication skills;', '— Responsibility.',  ];
      this.vacancies[vacancyCounter].conditions = ['— Work schedule 5/2;', '— Employment under the Labor Code, "white" wages', '— Paid leave of 28 calendar days, VMI;', '— Flexible working hours;'];
      this.vacancies[vacancyCounter].office = '— Comfortable office near ';
      this.vacancies[vacancyCounter].metro = 'Avtovo metro station.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Design engineer for the hull at the shipyard');
      this.vacancies[vacancyCounter].salary = 'from 100,000₽';
      this.vacancies[vacancyCounter].experience = 'more than 3 years';
      this.vacancies[vacancyCounter].responsibilities = ['— Design of hull structures of fishing vessels;', '— Development of documentation at the stage of SDSP, RKD, ED and PSD;', '— Modeling of hull structures in CAD (Foran).'];
      this.vacancies[vacancyCounter].requirements = ['— Work experience in shipbuilding is required;', '— Work experience in design organizations as a leading engineer or design engineer of the 1,2 category;', '— Foran CAD design experience is desirable;', '— Confident ownership of AutoCAD;', '— Communication skills;', '— Responsibility.',  ];
      this.vacancies[vacancyCounter].conditions = ['— Work schedule 5/2;', '— Employment under the Labor Code, "white" wages', '— Paid leave of 28 calendar days, VMI;', '— Flexible working hours;'];
      this.vacancies[vacancyCounter].office = '— Work at the PELLA-STAPEL shipyard ';
      this.vacancies[vacancyCounter].metro = 'Rybatskoe metro station.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Design Engineer of the Devices Department');
      this.vacancies[vacancyCounter].salary = 'from 80,000₽';
      this.vacancies[vacancyCounter].experience = 'more than 1 years';
      this.vacancies[vacancyCounter].responsibilities = ['— Selection and placement of ships devices in accordance with the parameters of the vessel;', '— Performing calculations confirming the required characteristics of the equipment;', '— Development of assembly and detailed drawings of ship devices;', '— Drafting of contract specifications and technical requirements;', '— Coordination of the supplied equipment with the supervisory authorities;', '— Development of operational and acceptance documentation;'];
      this.vacancies[vacancyCounter].requirements = ['— Опыт самостоятельной разработки судового или нестандартного оборудования;', '— Современный подход к проектирование конструкций;', '— Уверенное владение AutoCAD, Solid, желательно Foran;', '— Коммуникабельность;', '— Ответственность;', '— Стрессоустойчивость.'];
      this.vacancies[vacancyCounter].conditions = ['— Work schedule 5/2;', '— Employment under the Labor Code, "white" wages;', '— Paid leave of 28 calendar days, VMI;', '— Probation period of 3 months;', '— Interesting tasks, the possibility of professional development and career growth;', '— Flexible working hours;'];
      this.vacancies[vacancyCounter].office = '— Comfortable office near ';
      this.vacancies[vacancyCounter].metro = 'Avtovo metro station.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Design Engineer of the Devices Department at the shipyard');
      this.vacancies[vacancyCounter].salary = 'from 80,000₽';
      this.vacancies[vacancyCounter].experience = 'more than 1 years';
      this.vacancies[vacancyCounter].responsibilities = ['— Selection and placement of ships devices in accordance with the parameters of the vessel;', '— Performing calculations confirming the required characteristics of the equipment;', '— Development of assembly and detailed drawings of ship devices;', '— Drafting of contract specifications and technical requirements;', '— Coordination of the supplied equipment with the supervisory authorities;', '— Development of operational and acceptance documentation;'];
      this.vacancies[vacancyCounter].requirements = ['— Опыт самостоятельной разработки судового или нестандартного оборудования;', '— Современный подход к проектирование конструкций;', '— Уверенное владение AutoCAD, Solid, желательно Foran;', '— Коммуникабельность;', '— Ответственность;', '— Стрессоустойчивость.'];
      this.vacancies[vacancyCounter].conditions = ['— Work schedule 5/2;', '— Employment under the Labor Code, "white" wages;', '— Paid leave of 28 calendar days, VMI;', '— Probation period of 3 months;', '— Interesting tasks, the possibility of professional development and career growth;', '— Flexible working hours;'];
      this.vacancies[vacancyCounter].office = '— Work at the PELLA-STAPEL shipyard ';
      this.vacancies[vacancyCounter].metro = 'Rybatskoe metro station.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('The lead engineer is a calculator for the hull');
      this.vacancies[vacancyCounter].salary = 'Salary based on the results of the interview';
      this.vacancies[vacancyCounter].experience = 'more than 3 years';
      this.vacancies[vacancyCounter].responsibilities = ['— Calculations of general and local strength of hull structures, foundations, etc. (Ansys);', '— Work on one or more fishing vessel projects;', '— Approval of documentation in the RMRS.'];
      this.vacancies[vacancyCounter].requirements = ['— Higher technical education in the field of shipbuilding;', '— Knowledge of RMRS rules;', '— Work experience in shipbuilding is required;', '— Work experience in design organizations as a design engineer of 1,2 category/lead design engineer;', '— Modern approach to the design of structures.'];
      this.vacancies[vacancyCounter].conditions = ['— ГWork schedule 5/2;', '— Employment under the Labor Code, "white" wages;', '— Paid leave of 28 calendar days, VMI;', '— Probation period of 3 months;', '— Interesting tasks, the possibility of professional development and career growth;', '— Flexible working hours;'];
      this.vacancies[vacancyCounter].office = '— Comfortable office near ';
      this.vacancies[vacancyCounter].metro = 'Avtovo metro station.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Engineer-designer of ship systems and power plant systems');
      this.vacancies[vacancyCounter].salary = 'from 80,000₽';
      this.vacancies[vacancyCounter].experience = 'more than 1 years';
      this.vacancies[vacancyCounter].responsibilities = ['— Design of ship systems of fishing vessels;', '— Development of documentation at the stage of SDSP, RKD, ED and PSD;', '— Selection of equipment, fittings and fittings placement of equipment;', '— Modeling of pipeline systems in CAD (Foran).' ];
      this.vacancies[vacancyCounter].requirements = ['— Higher technical education in the field of shipbuilding;', '— Knowledge of RMRS rules;', '— Work experience in shipbuilding is required;', '— Work experience in design organizations as a design engineer of 1,2 category/lead design engineer;', '— Modern approach to the design of structures;', '— Communication skills;', '— Responsibility;', '— Stress resistance.'];
      this.vacancies[vacancyCounter].conditions = ['— ГWork schedule 5/2;', '— Employment under the Labor Code, "white" wages;', '— Paid leave of 28 calendar days, VMI;', '— Probation period of 3 months;', '— Interesting tasks, the possibility of professional development and career growth;', '— Flexible working hours;'];
      this.vacancies[vacancyCounter].office = '— Comfortable office near ';
      this.vacancies[vacancyCounter].metro = 'Avtovo metro station.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;

      vacancyCounter += 1;
      this.vacancies[vacancyCounter] = new Vacant('Engineer-designer of ship systems and power plant systems');
      this.vacancies[vacancyCounter].salary = 'from 80,000₽';
      this.vacancies[vacancyCounter].experience = 'more than 1 years';
      this.vacancies[vacancyCounter].responsibilities = ['— Design of ship systems of fishing vessels;', '— Development of documentation at the stage of SDSP, RKD, ED and PSD;', '— Selection of equipment, fittings and fittings placement of equipment;', '— Modeling of pipeline systems in CAD (Foran).' ];
      this.vacancies[vacancyCounter].requirements = ['— Higher technical education in the field of shipbuilding;', '— Knowledge of RMRS rules;', '— Work experience in shipbuilding is required;', '— Work experience in design organizations as a design engineer of 1,2 category/lead design engineer;', '— Modern approach to the design of structures;', '— Communication skills;', '— Responsibility;', '— Stress resistance.'];
      this.vacancies[vacancyCounter].conditions = ['— ГWork schedule 5/2;', '— Employment under the Labor Code, "white" wages;', '— Paid leave of 28 calendar days, VMI;', '— Probation period of 3 months;', '— Interesting tasks, the possibility of professional development and career growth;', '— Flexible working hours;'];
      this.vacancies[vacancyCounter].office = '— Work at the PELLA-STAPEL shipyard ';
      this.vacancies[vacancyCounter].metro = 'Rybatskoe metro station.';
      this.vacancies[vacancyCounter].indexPath = vacancyCounter;
    }
    this.event.emit('updated');
  }
}
