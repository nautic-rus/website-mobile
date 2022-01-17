import { Injectable, EventEmitter } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  lang = 'RU';
  event = new EventEmitter();
  constructor(private cookie: CookieService) {
    if (this.cookie.check('lang')){
      this.lang = this.cookie.get('lang') === 'RU' ? 'RU' : 'EN';
    }
    else{
      if (navigator.language === 'ru-RU'){
        this.lang = 'RU';
      }
      else
      {
        this.lang = 'EN';
      }
    }
    this.setLang(this.lang);
  }
  setLang(lang: string): void {
    this.lang = lang;
    const now = new Date();
    const expireDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
    this.cookie.set('lang', this.lang, expireDate, '', '', false, 'Lax');
    this.event.emit('langChanged');
  }
  translate(value: string): string{
    switch (this.lang){
      case 'EN': {
        switch (value){
          case 'Проекты': return 'Projects';
          case 'Дизайн': return 'Design';
          case 'Наши проекты': return 'Our projects';
          case 'Наши текущие проекты': return 'Our current projects';
          case 'Траулер 82м': return 'Trawler 82m';
          case 'Траулер 82м представляет собой большой морозильный рыболовный траулер-процессор, спроектированный для максимальной эффективности промысла.': return 'Trawler 82m big freezing processing trawler, designed for maximum fishing efficiency.';
          case 'Ярусолов 63м': return 'Longliner 63m';
          case 'Рыболовное судно 63м представляет собой линейку судов различных размерений, спроектированных для максимальной эффективности промысла.': return 'Longliner 63m is a series of vessels of various sizes, designed for maximum fishing efficiency. ';
          case 'Траулер 87м': return 'Trawler 87m';
          case 'Траулер 87м представляет собой большой морозильный рыболовный траулер-процессор, с возможностью лова донным и пелагическим тралом, спроектированный для максимальной эффективности промысла.': return 'Trawler 87m big freezing processing trawler with a possibility of fish catching with bottom and pelagic trawl, designed for maximum fishing efficiency. ';
          case 'Траулер 48м': return 'Trawler 48m';
          case 'Судно Траулер 48м оборудовано как траулер для свежей рыбы с регистровой длиной до 45м, способный вести лов тремя донными тралами одновременно, оборудовано 4 траловыми лебедками.': return 'Trawler 48m vessel equipped as a fresh fish trawler with a registration length under 45m capable of fishing with three bottom trawls simultaneously, equipped with 4 trawl winches.';
          case 'Раптор 24м': return 'Raptor 24m';
          case 'Серия Раптор 24м - это универсальное многоцелевое рыболовное судно, предназначенное для прибрежного лова на различных глубинах и разных методов рыбной ловли.': return 'Raptor 24m series is a highly versatile multipurpose fishing vessel, designed for coastal fishing at various depths and fishing methods.';
          case 'Траулер 30м': return 'Trawler 30m';
          case 'Судно Траулер 30м оборудовано как траулер для свежей рыбы, способный вести лов одним донным тралом, оборудовано 2 траловыми лебедками.': return 'Trawler 30m vessel is equipped as a fresh fish trawler capable of fishing with one bottom trawl, hence equipped with 2 trawl winches. ';
          case 'О Компании': return 'About the company';
          case 'Наутик Рус — это российская компания, выполняющая весь спектр проектирования рыболовных судов, от концептуального проекта до рабочей документации.': return 'Nautic Rus is a Russian company, which performs the whole range of fishing vessel design, from conceptual design to working documentation.';
          case 'Компания использует инновационные технологии в проектировании рыболовных траулеров от своих зарубежных партнеров, опираясь на многолетний опыт российских морских инженеров.': return 'The company uses its foreign partners innovative technologies in the fishing trawlers design, basing on the vast experience of Russian marine engineers.';
          case 'Мы готовы предложить конкурентоспособное решение для любого рыбодобывающего проекта, как в России, так и за рубежом.': return 'We are ready to offer a competitive solution for any fishing project, both in Russia and abroad.';
          case 'ГЛАВНАЯ': return 'ABOUT US';
          case 'ПРОЕКТЫ': return 'PROJECTS';
          case 'ДИЗАЙН': return 'DESIGN';
          case 'УСЛУГИ': return 'SERVICES';
          case 'СЕРТИФИКАТЫ': return 'CERTIFICATES';
          case 'КОНТАКТЫ': return 'CONTACT';
          case 'Главная': return 'About us';
          case 'ПОДРОБНЕЕ...': return 'READ MORE...';
          case 'Сертификаты': return 'Certificates';
          case 'Вакансии': return 'Vacancies';
          case 'Контакты': return 'Contact';
          case 'Услуги': return 'Services';
          case 'СОУТ': return 'SAWC';
          case 'Инфопартнер': return 'Info partner';
          case 'Наши партнеры в Исландии': return 'Check out our Icelandic partners';
          case 'Сертификат РМРС': return 'The RMRS Certificate';
          case 'Наша команда': return 'Our Team';
          case 'Рыболовное судно': return 'Fishing Vessel';
          case 'ДЛИНА': return 'LENGTH';
          case 'ШИРИНА': return 'WIDTH';
          case 'ОСАДКА': return 'DRAFT';
          case 'СКОРОСТЬ СУДНА': return 'VESSEL SPEED';
          case 'ЭКИПАЖ': return 'NUMBER of CREW';
          case 'м': return 'm';
          case 'уз': return 'kn';
          case 'чел': return 'ppl';
          case 'Попробуйте демо ниже:': return 'Try the Demo:';
          case 'Видами промысловых рыб являются:': return 'Fish species:';
          case 'Виды и способы переработки:': return 'Methods and types of processing:';
          case 'Скачать буклет': return 'Download booklet';
          case 'Санкт-Петербург, ул. Кронштадтская, дом 9, корпус 4, стр 1, офис 303': return 'Office 303, 9/4 Kronshtadtskaya str. build.1, St. Petersburg, Russia, 198096';
          case 'Свидетельство о соответствии предприятия. Документ, подтверждающий, что оказываемые предприятием услуги соответствуют требованиями Регистра Судоходства.': return 'The main document issued by the Russian Maritime Register of Shipping is a Type Approval Certificate. The type approval certificate is a document certifying that the properties, parameters and characteristics of the type material or product issued by the manufacturer comply with the requirements of the rules of the Russian Maritime Register of Shipping for use on vessels and objects of a technical supervision for the intended purpose. A type approval certificate is required for companies that manufacture the products used in the maritime sphere, shipping and working on seas and rivers.';
          case 'Эти суда спроектированы нашими партнёрами из Исландии': return 'These vessels are designed by our Icelandic partners';
          case 'Будущее за синтезом технологий и дизайна': return 'The future lies in the synthesis of technology and design.';
          case 'Мы убеждены – высокотехнологичность и современность должны проявляться как во внутренних системах судна, так и во внешнем облике.': return 'We are highly convinced that high technology and modernity should be manifested as in the internal ship systems, in the outer appearance as well as in the interiors.';
          case 'Наша главная задача - спроектировать эргономичное и красивое пространство для людей, длительное время пребывающих в непростых условиях моря. Для людей, выполняющих физически трудную и ответственную работу изо дня в день.': return 'Our major challenge is to design an ergonomic, comfortable and beautiful space for people spending a lot of time in tough sea conditions. For people accomplishing physically hard and responsible work day by day.';
          case 'Используя знания о влиянии света и цвета на физическое и эмоциональное состояние человека, мы применяем в дизайне интерьеров траулера решения, которые способствуют качественному отдыху и быстрому восстановлению сил экипажа.': return 'Using our knowledge about the light and color influence on the physical and emotional state of a person, we apply such the solutions in the trawler interior design which contribute to high-quality rest and quick crew recovery.';
          case 'Уникальность подхода к дизайну компании Nautic Rus состоит в том, что мы уделяем внимание абсолютно всем зонам, даже тем, которые на первый взгляд не нуждаются в этом, где превалирует технический подход. Мы интегрируем эстетику в функциональные и технические помещения.': return 'The Nautic Rus unique design approach is that we pay attention to completely all areas, even those that at first sight do not require this, where the technical approach prevails. We integrate aesthetics into the functional equipment and the technical rooms.';
          case 'Прививая любовь к упорядоченности и красоте, мы воспитываем уважение к себе и окружающим, делаем шаг к формированию более совершенного общества.': return 'By cultivating love of orderliness and beauty, we bring up due respect for ourselves and those around us, we take a step towards the establishing of a more perfect society.';
          case 'Мы уверены, что созданные нами условия, привлекут большее количество квалифицированных работников на траулер. Наш подход к созданию траулеров нового поколения повлияет на восприятие и позиционирование рыболовной отрасли.': return 'Modern people are accustomed to comfort. We believe that the conditions created by us that meet the requirements of a modern person will attract more qualified workers to the trawler. We hope that our approach will influence the perception and positioning of the fishing profession.';
          case 'Концепт проект': return 'Concept design';
          case 'После получения технического задания от заказчика судна проектант начинает разработку концепт проекта. Концепт проект включает в себя разработку предварительных обводов судна, общее расположение, построечную спецификацию, выбор основного оборудования, предварительный заказ материалов и веса судна, а так же другие вспомогательные документы.': return 'After receiving a technical requirements from a customer, a designer develops a concept design. The concept design includes a preliminary hull lines development, a general arrangement, a building specification, main equipment suggestions, a preliminary makers list, the estimated weight of the Vessel as well as other supporting documents.';
          case 'Проектная документация (ПДСП)': return 'Class drawings';
          case 'Проектная документация судна в постройке разрабатывается после согласования концепт проекта заказчиком судна. ПДСП включает в себя комплект документов, расчеты, чертежи, обоснования, которые согласно правилам классификации и постройки морских судов направляются для одобрения и согласования в РМРС.': return 'The class drawings for the vessel are developed after the customer approves the concept design. The class drawings include a set of documents, calculations, drawings, explanations to be sent to the RMRS for approval according to the classification and sea vessels rules. ';
          case 'Рабоче-конструкторская документация (РКД)': return 'Workshop design documentation';
          case 'После одобрения полного пакета документации ПДСП проектант приступает к разработке РКД по всем видам специализаций (корпус, системы, электрика, достройка).': return 'The development of workshop drawings, intended for the shipyard as a detailed – how to build manual, are developed by the Design Bureau as the individual class drawings are approved by the owner and the class society. Having the opportunity to have this done within the same office as the class drawings  is a clear benefit for all parties. The likelihood of misinterpretation of the class drawing are reduced, if not eliminated and the likelihood of the ship being constructed as the Designer intended it to be are secured. The workshop drawings and documentation span the entirety of the Vessel from the Hull, Systems, Electrical Installations and Outfitting.';
          case '3D моделирование': return '3D-Modelling';
          case 'Современное проектирование судов невозможно без создания качественной 3D модели. Детально прорисованная 3D модель является основой и базой, на которой отрабатываются все конструктивные решения и выполняются необходимые расчеты судна. В качестве основной программы трехмерного моделирования компания “Nautic Rus” использует систему автоматизированного проектирования “FORAN”. Данная система является одной из лучших на сегодняшний день трехмерной программой проектирования в области судостроения, как по функционалу, так и по объему информации, которую система способна выдавать, при правильном использовании соответствующих модулей программы.': return 'Modern Naval Designs are not carried out in two dimensional design programs alone anymore, let alone on paper. The initial design and the General Arrangement of a vessel are certainly developed in such design space. However, in Nautic RUS, the vessel´s design is virtually constructed in a 3D platform in parallel. This allows the design team to make very constructive design decisions and adjustments prior to handing the final workshop or class drawings over for approval. This allows the designer and the owner to make optimal use of space available in the vessel. Once the 3D model, constructed in Foran, is complete – the system spits out the detail drawings on two dimensional space. Foran is one of the leading platforms for Naval Design, both in terms of functionality and the completeness of the scope it can manage.';
          case '“Nautic Rus” обладает всеми необходимыми компетенциями в области проектирования судов. Сотрудники Нашей компании проходят семинары и лекции проводимые разработчиками программы, на которых проводится обучение и ознакомление с возможностями системы “FORAN”.': return 'Nautic-Rus has all the necessary competencies in Naval design. Our engineers attend training and seminars, to stay up to date on the latest capabilities of ‘FORAN’s possibilities.';
          case 'Постоянное совершенство сотрудников и работа разных бюро (электриков, системщиков, корпусников, устройщиков, достройщиков) в единой системе позволяет создать качественную, детально прорисованную модель проектируемого судна, что в свою очередь помогает предотвращать возможные ошибки при проектировании и позволяет выпускать Рабочую Конструкторскую Документацию высокой степени проработки.': return 'The continuous professional development of our employees and tight collaborations between department´s in one integrated system enables us to create high-quality, in-detailed model of the vessel, which in turn helps to reduce possible mistakes during the design process, as well as ensuring high-quality workshop documentation.';
          case 'Так же немаловажным аспектом является корректировка 3D модели и своевременное внесение изменений, которые неизбежно происходят при строительстве судна и в последствии приводит к появлению ошибок и несогласованности систем судна. Наша компания осуществляет техническую поддержку и сопровождение при постройке судна – это дает Заказчику возможность владеть всей необходимой информацией о возможности внесения изменений. Правильное использование и актуализация 3D модели позволяет сократить сроки и издержки при строительстве судна, что является важным конкурентным преимуществом Нашей компании.': return 'Another important fact is the 3D model adjustment and duly changes update as they inevitably occur when building a ship. In the future, this leads to mistakes and ship systems malfunction. Our company carries out the technical support and guidance along the whole shipbuilding process, which provides the customer with an opportunity to have all the necessary information concerning making amendments.  The update and correct usage of the 3D model enables us to reduce terms and cut costs when building the ship, which is a significant cutting edge of our company.';
          case 'Плазово-технологическая документация': return 'Nesting documentation';
          case 'Плазово-технологическая документация, разрабатывается на основе разработанной 3d модели судна. И включает в себя раскрой листовых деталей, эскизы профилей, программ резки с нанесением маркировки, изготовление шаблонов гибки профильных и листовых деталей. При необходимости так же предоставляются чертежи оснастки.': return 'Nesting documentation is developed based on the 3D ship model. It includes parts cutting, profile sketches, cutting with marking, profile and plate details bending sketches. Fitting drawings are also provided as needed.';
          case 'Эксплуатационная документация и приемо-сдаточная': return 'Operational and tests/trials documentation ';
          case 'Рабочая конструкторская документация предназначена для изучения конструкции изделия и правил его эксплуатации.': return 'Workshop design documentation is intended for the ship structure study and its’ operational rules.';
          case 'Приемо-сдаточная документация – документация, в состав которой входит разрешительная документация, дающая право на выполнение строительно-монтажных работ, и исполнительная документация, подтверждающая фактическое выполнение строительно-монтажных работ в объеме, установленном в проектной документации.': return 'Tests/trials documentation is the documentation including permittance documentation granting a right for construction and assembly works on the one hand, and as-built documentation, confirming the actual performance of the construction and assembly works in a scope set in the class drawing, on the other. ';
          case 'Авторский надзор': return 'Designer supervision';
          case 'Авторский надзор - планируемая система контроля проектно-конструкторского предприятия - автора проекта за строительствам и эксплуатацией судов, которая является составной частью работы над проектом.': return 'Designer supervision is a planned control system of a design bureau. Designer supervision is an integral part of the design work. ';
          case 'При строительстве и ремонте любого судна часто возникают вопросы по внесению корректив в исходный проект. Изменения могут быть связаны с применением иного оборудования и материалов, оптимизацией конструкций и снижением стоимости строительства. По желанию Заказчика этот процесс может сопровождаться технической поддержкой наших квалифицированных инженеров с соответствующей корректировкой документации и согласованием ее в контролирующих организациях.': return 'When building and repairing any ship, questions on the initial project amendments often arise. They can be related to some other equipment and materials appliance, construction improvements, and cost reduction. According to the customer’s wish, we can as well provide technical support of our engineers with a documentation update and its approval in the state bodies. ';
          case 'Реклассификация судов': return 'Ship reclassification ';
          case 'Реклассификация судов или смена класса судна – это процедура технической экспертизы и освидетельствования судна с целью замены (выдачи) судовых классификационных свидетельств, выданных ранее старым классификационным обществом, на классификационные свидетельства, выдаваемые новым классификационным обществом.': return 'Ship reclassification or ship class change is a procedure of technical expertise and inspection aimed to change or issue old registry certificates for the new ones. ';
          case 'Модернизация и переоборудование судов': return 'Ship upgrading and reequipment ';
          case 'Модернизация - совокупность операций по изменению конструкции судна (элемента судна) с целью улучшения технико-эксплуатационных характеристик, условий труда и быта, а также выполнения требований Международных конвенций.': return 'Upgrading is a measure aimed at ship construction or element changing. This measure is taken to improve technical characteristics, work and life conditions, and International conventions requirements fulfillment. ';
          default: return value;
        }
      }
      case 'RU': {
        switch (value) {
          case 'ALL': return 'ВСЕ';
          case 'MANAGEMENT': return 'РУКОВОДСТВО';
          case 'DESIGN': return 'ДИЗАЙН';
          case 'DEVICES': return 'УСТРОЙСТВА';
          case 'OUTFITTING': return 'ДОСТРОЙКА';
          case 'ELECTRICAL': return 'ЭЛЕКТРОТЕХНИЧЕСКИЙ';
          case 'FINANCE': return 'ФИНАНСЫ';
          case 'STABILITY': return 'ОСТОЙЧИВОСТЬ';
          case 'HULL': return 'КОРПУС';
          case 'IT': return 'IT-ОТДЕЛ';
          case 'PIPPING': return 'СИСТЕМЫ';
          default: return value;
        }
      }
      default: {
        return value;
      }
    }
  }
}
