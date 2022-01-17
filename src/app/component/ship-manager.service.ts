import {EventEmitter, Injectable} from '@angular/core';
import {Project} from './projects/project';
import {TranslationService} from '../translation.service';

@Injectable({
  providedIn: 'root'
})
export class ShipManagerService {
  projects: Project[] = [];
  event = new EventEmitter();
  constructor(public t: TranslationService) {
    for (let x = 0; x < 12; x++){
      this.projects.push(null);
    }
    this.fillProjects();
    this.t.event.subscribe(event => {
      if (event === 'langChanged'){
        this.fillProjects();
      }
    });
  }
  fillProjects(): void{
    let projectCounter = 0;
    if (this.t.lang === 'RU'){
      this.projects[projectCounter] = new Project('ТРАУЛЕР 87м', 'Рыболовное судно', '87');
      this.projects[projectCounter].description = 'Траулер 87м представляет собой большой морозильный рыболовный траулер-процессор, с возможностью лова донным и пелагическим тралом, спроектированный для максимальной эффективности промысла.';
      this.projects[projectCounter].mainProps = ['ICE3 (HULL)', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['87.00', '17.00', '6.85', '15', '96'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">ТРАУЛЕР</span> представляет собой большой морозильный рыболовный траулер-процессор, с возможностью лова донным и пелагическим тралом, спроектированный для максимальной эффективности промысла. Конструкция основывается на устоявшейся и проверенной концепции носовой части';
      this.projects[projectCounter].subDescription2 = ', которая обеспечивает наилучшую мореходность судна в суровых морях. Данная форма носовой части также позволяет полностью использовать размер судна на благо экипажа и максимальной вместимости рыбного трюма и судна в целом.';
      this.projects[projectCounter].subDetails = ['Общая мощность переработки на судне ~ 200 т/день.', 'Производительность заморозки на судне ~ 200 т/день.', 'Общая вместимость трюмов ~ 2005м³.'];
      this.projects[projectCounter].fishTypes = 'треска, минтай, окунь, палтус, сельдь, скумбрия, сардина, кальмар и другие виды рыб.';
      this.projects[projectCounter].recycles = 'замороженное филе, фарш, икра, молока, субпродукты, рыбная мука и жир.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('ТРАУЛЕР 82м', 'Рыболовное судно', '82');
      this.projects[projectCounter].description =  'Траулер 82м представляет собой большой морозильный рыболовный траулер-процессор, спроектированный для максимальной эффективности промысла.';
      this.projects[projectCounter].mainProps = ['ICE3 (HULL)', 'ICE2 (MACHINERY)', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['82.00', '16.00', '6.30', '15', '80'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">ТРАУЛЕР</span> представляет собой большой морозильный рыболовный траулер-процессор, с возможностью использования 2-х тралов, спроектированный для максимальной эффективности промысла. Конструкция основывается на устоявшейся и проверенной концепции носовой части';
      this.projects[projectCounter].subDescription2 = ', которая обеспечивает наилучшую мореходность судна в суровых морях. Данная форма носовой части также позволяет полностью использовать ограниченный размер судна на благо экипажа и максимальной вместимости рыбного трюма и судна в целом.';
      this.projects[projectCounter].subDetails = ['Общая мощность переработки на судне ~ 150 т/день.', 'Производительность заморозки на судне ~ 100 т/день.', 'Общая вместимость трюмов ~ 1875м³.'];
      this.projects[projectCounter].fishTypes = 'треска, минтай, пикша, камбала, окунь, палтус, креветка и другие виды рыб.';
      this.projects[projectCounter].recycles = 'замороженное филе, консервированная печень, субпродукты, рыбная мука и жир.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('ЯРУСОЛОВ 63м', 'Рыболовное судно', '63');
      this.projects[projectCounter].description = 'Рыболовное судно 63м представляет собой линейку судов различных размерений, спроектированных для максимальной эффективности промысла.';
      this.projects[projectCounter].mainProps = ['ICE3 (HULL)', 'ICE2 (MACHINERY)', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['63.00', '14.00', '5.962', '14', '39'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">ЯРУСОЛОВ</span> представляет собой линейку судов различных размерений, спроектированных для максимальной эффективности промысла. Конструкция основывается на устоявшейся и проверенной концепции носовой части ';
      this.projects[projectCounter].subDescription2 = ', которая обеспечивает наилучшую мореходность судна в суровых морях. Данная форма носовой части также позволяет полностью использовать размер судна на благо экипажа и максимальной вместимости рыбного трюма и судна в целом.';
      this.projects[projectCounter].subDetails = ['Общая мощность переработки на судне ~ 50 т/день.', 'Производительность заморозки на судне ~ 50 т/день.', 'Вместимость главного рыбного трюма ~ 1150м³.'];
      this.projects[projectCounter].fishTypes = 'треска, минтай, макрурус, камчатская камбала, гренландский палтус, палтус стрелозубый, палтус белокорый, угольная рыба, окунь и другие виды рыб.';
      this.projects[projectCounter].recycles = 'замороженное филе, консервированная печень, неразделанная рыба шоковой заморозки, субпродукты.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('КРАБОЛОВ 60м', 'Рыболовное судно', '60');
      this.projects[projectCounter].description = 'Рыболовное судно Краболов 60м предназначено для ловли всех видов крабов с использованием конических ловушек, закрепленных на хребтине.';
      this.projects[projectCounter].mainProps = ['ICE2', 'AUT1', 'OMBO', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['59.63', '14.00', '6.50', '14', '32'];
      this.projects[projectCounter].subDescription1 = 'Судно <span class="text-bold">КРАБОЛОВ</span> предназначено для ловли всех видов крабов с использованием конических ловушек, закрепленных на хребтине. Судно закрытого концепта, предназначенное для выборки крабовых ловушек классическим методом с борта судна через большое боковое открытие с гидравлическим приводом на правом борту судна. Корпус выполнен в форме ';
      this.projects[projectCounter].subDescription2 = ', обеспечивая различные преимущества конструкции, включая повышенный комфорт для экипажа. Зона переработки представляет собой полностью открытое пространство без опорных пиллерсов. ';
      this.projects[projectCounter].subDetails = ['Зона полной переработки краба площадью 360м².', 'Вместимость трюма ~ 650м³.'];
      this.projects[projectCounter].fishTypes = 'различные виды краба.';
      this.projects[projectCounter].recycles = 'переработка выловленного краба с методом воздушной заморозки в варено-мороженые и сыро-мороженые продукты разных видов.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('ТРАУЛЕР 48м', 'Рыболовное судно', '48');
      this.projects[projectCounter].description = 'Судно Траулер 48м оборудовано как траулер для свежей рыбы с регистровой длиной до 45м, способный вести лов тремя донными тралами одновременно, оборудовано 4 траловыми лебедками.';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['48.10', '14.00', '5.75', '13', '16'];
      this.projects[projectCounter].subDescription1 = 'Судно <span class="text-bold">ТРАУЛЕР</span> оборудовано как траулер для свежей рыбы с регистровой длиной до 45 м, способный вести лов тремя донными тралами одновременно, оборудовано 4 траловыми лебедками. Корпус выполнен в форме ';
      this.projects[projectCounter].subDescription2 = ', обеспечивая различные преимущества конструкции, включая повышенный комфорт для экипажа из 16 человек. Зона рыбопереработки представляет собой полностью открытое пространство без опорных пиллерсов.';
      this.projects[projectCounter].subDetails = ['Зона рыбопереработки площадью 285м² для первичной обработки улова.', 'Вместимость трюма ~ 630м³.'];
      this.projects[projectCounter].fishTypes = 'треска, минтай, пикша, камбала, окунь, сельдь, скумбрия, кальмар, креветка и другие виды рыб.';
      this.projects[projectCounter].recycles = 'потрошение и охлаждение рыбы для последующей переработки на берегу.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('ТРАУЛЕР 30м', 'Рыболовное судно', '30');
      this.projects[projectCounter].description = 'Судно Траулер 30м оборудовано как траулер для свежей рыбы, способный вести лов одним донным тралом, оборудовано 2 траловыми лебедками.';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'R2-RSN', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['29.75', '12.00', '4.45', '10', '14'];
      this.projects[projectCounter].subDescription1 = 'Судно <span class="text-bold">ТРАУЛЕР</span> оборудовано как траулер для свежей рыбы, способный вести лов одним донным тралом, оборудовано 2 траловыми лебедками. Корпус выполнен в форме ';
      this.projects[projectCounter].subDescription2 = ', обеспечивая различные преимущества конструкции, включая повышенный комфорт для экипажа из 14 человек. Зона рыбопереработки представляет собой полностью открытое пространство без опорных пиллерсов. ';
      this.projects[projectCounter].subDetails = ['Зона рыбопереработки площадью 137м² для первичной обработки улова.', 'Вместимость трюма ~ 312м³.'];
      this.projects[projectCounter].fishTypes = 'треска, минтай, пикша, камбала, окунь, сельдь, скумбрия, кальмар, и другие виды рыб.';
      this.projects[projectCounter].recycles = 'потрошение и охлаждение рыбы для последующей переработки на берегу.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('РАПТОР 24м', 'Рыболовное судно', '24');
      this.projects[projectCounter].description = 'Серия Раптор 24м - это универсальное многоцелевое рыболовное судно, предназначенное для прибрежного лова на различных глубинах и разных методов рыбной ловли.';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'R2-RSN', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['24.00', '9.00', '3.50', '10', '9'];
      this.projects[projectCounter].subDescription1 = 'Серия <span class="text-bold">РАПТОР</span> - это универсальное многоцелевое рыболовное судно, предназначенное для прибрежного лова на различных глубинах и разных методов рыбной ловли. Благодаря вариации концепции ';
      this.projects[projectCounter].subDescription2 = 'обеспечивающей максимально возможную длину ватерлинии, а также увеличенную ширину корпуса, на судне достигается увеличенный объем и соответствующая плавучесть корпуса. Эти функции обеспечивают хорошее поведение судна и улучшенную рабочую среду для экипажа.';
      this.projects[projectCounter].subDetails = ['Зона рыбопереработки на открытой палубе площадью 45м² для первичной обработки улова.', 'Вместимость трюма ~ 190м³.'];
      this.projects[projectCounter].fishTypes = 'треска, минтай, пикша, камбала, окунь, сельдь, скумбрия, кальмар, и другие виды рыб.';
      this.projects[projectCounter].recycles = 'потрошение и охлаждение рыбы для последующей переработки на берегу, заморозка.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('ЯРУСОЛОВ 20м', 'Рыболовное судно прибрежного промысла', '20');
      this.projects[projectCounter].description = 'Серия Ярусолов 20м - это универсальное многоцелевое рыболовное судно, предназначенное для прибрежного лова на различных глубинах и разных методов рыбной ловли. ';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'R2-RSN', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['20.00', '8.00', '3.65', '10', '10'];
      this.projects[projectCounter].subDescription1 = 'Серия <span class="text-bold">ЯРУСОЛОВ 20м</span> - это универсальное многоцелевое рыболовное судно, предназначенное для прибрежного лова на различных глубинах и разных методов рыбной ловли. Благодаря вариации концепции ';
      this.projects[projectCounter].subDescription2 = 'обеспечивающей максимально возможную длину ватерлинии, а также увеличенную ширину корпуса, на судне достигается увеличенный объем и соответствующая плавучесть корпуса. Эти функции обеспечивают хорошее поведение судна и улучшенную рабочую среду для экипажа.';
      this.projects[projectCounter].subDetails = ['Вместимость рыбного трюма ~ 125м³.'];
      this.projects[projectCounter].fishTypes = 'треска, минтай, пикша, камбала, окунь, палтус, макрурус, и другие виды рыб.';
      this.projects[projectCounter].recycles = 'охлаждение рыбы для последующей переработки на берегу.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('ЯРУСОЛОВ 15м', 'Рыболовное судно прибрежного промысла', '15');
      this.projects[projectCounter].description = 'Серия Ярусолов 15м - это универсальное многоцелевое рыболовное судно, предназначенное для прибрежного лова на различных глубинах и разных методов рыбной ловли.';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'R2-RSN', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['15.00', '6.00', '3.25', '10', '8'];
      this.projects[projectCounter].subDescription1 = 'Серия <span class="text-bold">ЯРУСОЛОВ 15м</span> - это универсальное многоцелевое рыболовное судно, предназначенное для прибрежного лова на различных глубинах и разных методов рыбной ловли. Благодаря вариации концепции ';
      this.projects[projectCounter].subDescription2 = 'обеспечивающей максимально возможную длину ватерлинии, а также увеличенную ширину корпуса, на судне достигается увеличенный объем и соответствующая плавучесть корпуса. Эти функции обеспечивают хорошее поведение судна и улучшенную рабочую среду для экипажа.';
      this.projects[projectCounter].subDetails = ['Вместимость рыбного трюма ~ 50м³.'];
      this.projects[projectCounter].fishTypes = 'треска, минтай, пикша, камбала, окунь, сельдь, скумбрия, кальмар, и другие виды рыб.';
      this.projects[projectCounter].recycles = 'охлаждение рыбы для последующей переработки на берегу.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Engey RE 1 (Кильдин)', '', '7');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed for HB Grandi ltd. Delivered 2016.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Björg EA 7', '', '8');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed by Skipataekni ehf., for Samherji ltd. Delivered 2017.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Drangey SK 2', '', '9');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed by Skipataekni ehf., for Samherji ltd.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Kaldbakur EA 1', '', '10');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed by Skipataekni ehf., for UA ltd. Delivered 2017.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Viðey ER 50', '', '11');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed for HB Grandi ltd. Delivered 2017.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Akurey AK 10', '', '12');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed for HB Grandi ltd. Delivered 2017.';
    }
    else {
      this.projects[projectCounter] = new Project('Trawler 87m', 'Fishing Vessel', '87');
      this.projects[projectCounter].description = 'Trawler 87m big freezing processing trawler with a possibility of fish catching with bottom and pelagic trawl, designed for maximum fishing efficiency.';
      this.projects[projectCounter].mainProps = ['ICE3 (HULL)', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['87.00', '17.00', '6.85', '15', '96'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">TRAWLER </span>big freezing processing trawler with a possibility of fish catching with bottom and pelagic trawl, designed for maximum fishing efficiency. The design based on the well-established and proven ';
      this.projects[projectCounter].subDescription2 = ' concept for the best seaworthiness in rough seas. This bow shape also allows full use of  size of the vessel for the benefit of the crew and the maximum capacity of the fish hold and the vessel as a whole.';
      this.projects[projectCounter].subDetails = ['Total processing capacity on the ship ~ 200t / day. ', 'Freezing capacity ~ 200t / day.', 'Total capacity of holds ~ 2005m³.'];
      this.projects[projectCounter].fishTypes = 'cod, pollock, red fish, halibut, herring, mackerel, sardines, squid and other types of fish.';
      this.projects[projectCounter].recycles = 'frozen blocks of fillets, mince, roe, milt, offal, fish meal and fish oil.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Trawler 82m', 'Fishing Vessel', '82');
      this.projects[projectCounter].description =  'Trawler 82m big freezing processing trawler, designed for maximum fishing efficiency.';
      this.projects[projectCounter].mainProps = ['ICE3 (HULL)', 'ICE2 (MACHINERY)', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['82.00', '16.00', '6.30', '15', '80'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">TRAWLER</span> big freezing processing trawler, designed for maximum fishing efficiency. The design based on the well-established and proven ';
      this.projects[projectCounter].subDescription2 = ' concept for the best seaworthiness in rough seas. This bow shape also allows full use of the limited size of the vessel for the benefit of the crew and the maximum capacity of the fish hold and the vessel as a whole.';
      this.projects[projectCounter].subDetails = ['Total processing capacity on the ship ~ 150t / day. ', 'Freezing capacity ~ 100t / day.', 'Total capacity of holds ~ 1875m³.'];
      this.projects[projectCounter].fishTypes = 'cod, pollock, haddock, flatfish, red fish, halibut, shrimp and other bottom types of fish';
      this.projects[projectCounter].recycles = 'frozen blocks of fillets, canned liver, offal, fish meal and fish oil.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Longliner 63m', 'Fishing Vessel', '63');
      this.projects[projectCounter].description = 'Longliner 63m is a series of vessels of various sizes, designed for maximum fishing efficiency.';
      this.projects[projectCounter].mainProps = ['ICE3 (HULL)', 'ICE2 (MACHINERY)', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['63.00', '14.00', '5.962', '14', '39'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">LONGLINER</span> is a series of vessels of various sizes, designed for maximum fishing efficiency. The design based on the well-established and proven  ';
      this.projects[projectCounter].subDescription2 = ' concept for the best seaworthiness in rough seas. This bow shape also allows full use of the vessel for the benefit of the crew and the maximum capacity of the fish hold and the vessel as a whole.';
      this.projects[projectCounter].subDetails = ['Total processing capacity on the ship ~ 50t / day. ', 'Freezing capacity ~ 50t / day.', 'Total capacity of holds ~ 1150m³.'];
      this.projects[projectCounter].fishTypes = 'cod, pollock, grenadier, Kamchatka flounder, Greenland halibut, Arrowtooth halibut, Pacific halibut, coal fish, red fish and other bottom types of fish.';
      this.projects[projectCounter].recycles = 'frozen blocks of fillets, canned liver, fish frozen whole in shock freezer, offal.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Crab Harvester 60m', 'Fishing Vessel', '60');
      this.projects[projectCounter].description = 'Crab Harvester 60m is a fishing vessel intended for harvesting all species of crab with the use of multiple conical traps fitted on a line.';
      this.projects[projectCounter].mainProps = ['ICE2', 'AUT1', 'OMBO', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['59.63', '14.00', '6.50', '14', '32'];
      this.projects[projectCounter].subDescription1 = 'The vessel <span class="text-bold">Crab Harvester</span> is a closed concept vessel, arranged for retrieving crab pots conventionally from side of the vessel through a large hydraulic operated side opening on SB side of the vessel. The hull is designed with the  ';
      this.projects[projectCounter].subDescription2 = ', bulbous bow shape providing various behavioural benefits from the design, including increased comfort for a crew. The processing deck is a completely open space with no support pillars. ';
      this.projects[projectCounter].subDetails = ['Full Crab processing area 360m².', 'Fish hold capacity  ~ 650m³.'];
      this.projects[projectCounter].fishTypes = 'different species of crab.';
      this.projects[projectCounter].recycles = 'processing of harvested crab by air freezing into cooked-frozen and raw-frozen products of various types.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Trawler 48m', 'Fishing Vessel', '48');
      this.projects[projectCounter].description = 'Trawler 48m vessel equipped as a fresh fish trawler with a registration length under 45m capable of fishing with three bottom trawls simultaneously, equipped with 4 trawl winches.';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['48.10', '14.00', '5.75', '13', '16'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">TRAWLER</span> vessel equipped as a fresh fish trawler with a registration length under 45m capable of fishing with three bottom trawls simultaneously, equipped with 4 trawl winches. The hull is designed with the ';
      this.projects[projectCounter].subDescription2 = ' bulbous bow shape providing various behavioural benefits from the design, including increased comfort for a crew upto 16 persons. The processing deck is a completely open space with no support pillars. ';
      this.projects[projectCounter].subDetails = ['Fish processing area with an area of 285m² for the primary processing of the catch.', 'Fish hold capacity ~ 630 m³.'];
      this.projects[projectCounter].fishTypes = 'cod, pollock, haddock, flatfish, red fish, herring, mackerel, squid, shrimps and other types of fish.';
      this.projects[projectCounter].recycles = 'gutting and cooling of fish for further processing onshore.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Trawler 30m', 'Fishing Vessel', '30');
      this.projects[projectCounter].description = 'Trawler 30m vessel is equipped as a fresh fish trawler capable of fishing with one bottom trawl, hence equipped with 2 trawl winches.';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'R2-RSN', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['29.75', '12.00', '4.45', '10', '14'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">TRAWLER </span> vessel is equipped as a fresh fish trawler capable of fishing with one bottom trawl, hence equipped with 2 trawl winches. The hull is designed with the  ';
      this.projects[projectCounter].subDescription2 = ' bulbous bow shape providing various behavioural benefits from the design, including increased comfort for a crew upto 14 persons. The processing deck is a completely open space with no support pillars. ';
      this.projects[projectCounter].subDetails = ['Fish processing area with an area of 137m2 for the primary processing of the catch.', 'Fish hold capacity ~ 312м³.'];
      this.projects[projectCounter].fishTypes = 'cod, pollock, haddock, flatfish, red fish, herring, mackerel, squid and other types of fish.';
      this.projects[projectCounter].recycles = 'gutting and cooling of fish for further processing onshore.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('Raptor 24m', 'Fishing Vessel', '24');
      this.projects[projectCounter].description = 'Raptor 24m series is a highly versatile multipurpose fishing vessel, designed for coastal fishing at various depths and fishing methods.';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'R2-RSN', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['24.00', '9.00', '3.50', '10', '9'];
      this.projects[projectCounter].subDescription1 = '<span class="text-bold">RAPTOR</span> series is a highly versatile multipurpose fishing vessel, designed for coastal fishing at various depths and fishing methods. With a variation feature to the  ';
      this.projects[projectCounter].subDescription2 = 'concept to ensure the longest possible waterline, along with excessive width of the hull, increased volume is obtained in the vessel and corresponding buoyancy of the hull. These features secure good performance of the vessel and improved working environment for the crew. ';
      this.projects[projectCounter].subDetails = ['Fish processing area on an open deck with an area of 45m³ for the primary processing of the catch.', 'Fish hold capacity ~ 190м³.'];
      this.projects[projectCounter].fishTypes = 'cod, pollock, haddock, flatfish, red fish, herring, mackerel, squid and other types of fish.';
      this.projects[projectCounter].recycles = 'cooling of fish for further processing onshore, freezing.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('Longliner 20m', 'Fishing Inshore Vessel', '20');
      this.projects[projectCounter].description = 'Series Longliner 20m is a highly versatile multipurpose fishing vessel, designed for coastal fishing at various depths and fishing methods. ';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'R2-RSN', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['20.00', '8.00', '3.65', '10', '10'];
      this.projects[projectCounter].subDescription1 = 'Series <span class="text-bold">Longliner 20m</span> is a highly versatile multipurpose fishing vessel, designed for coastal fishing at various depths and fishing methods. With a variation feature to the ';
      this.projects[projectCounter].subDescription2 = 'concept to ensure the longest possible waterline, along with excessive width of the hull, increased volume is obtained in the vessel and corresponding buoyancy of the hull. These features secure good performance of the vessel and improved working environment for the crew. ';
      this.projects[projectCounter].subDetails = ['Fish hold capacity ~ 125м³.'];
      this.projects[projectCounter].fishTypes = 'cod, pollock, haddock, flatfish, red fish, halibut, macrourus and other types of fish.';
      this.projects[projectCounter].recycles = 'cooling of fish for further processing onshore.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project('Longliner 15m', 'Fishing Inshore Vessel', '15');
      this.projects[projectCounter].description = 'Series Longliner 15m is a highly versatile multipurpose fishing vessel, designed for coastal fishing at various depths and fishing methods.';
      this.projects[projectCounter].mainProps = ['ICE2 (HULL)', 'ICE1 (MACHINERY)', 'R2-RSN', 'AUT1', 'FISHING VESSEL'];
      this.projects[projectCounter].props = ['15.00', '6.00', '3.25', '10', '8'];
      this.projects[projectCounter].subDescription1 = 'Series <span class="text-bold">Longliner 15m</span> is a highly versatile multipurpose fishing vessel, designed for coastal fishing at various depths and fishing methods. With a variation feature to the ';
      this.projects[projectCounter].subDescription2 = 'concept to ensure the longest possible waterline, along with excessive width of the hull, increased volume is obtained in the vessel and corresponding buoyancy of the hull. These features secure good performance of the vessel and improved working environment for the crew.';
      this.projects[projectCounter].subDetails = ['Fish hold capacity ~ 50м³.'];
      this.projects[projectCounter].fishTypes = 'cod, pollock, haddock, flatfish, red fish, halibut, macrourus and other types of fish.';
      this.projects[projectCounter].recycles = 'cooling of fish for further processing onshore.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Engey RE 1 (Кильдин)', '', '7');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed for HB Grandi ltd. Delivered 2016.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Björg EA 7', '', '8');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed by Skipataekni ehf., for Samherji ltd. Delivered 2017.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Drangey SK 2', '', '9');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed by Skipataekni ehf., for Samherji ltd.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Kaldbakur EA 1', '', '10');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed by Skipataekni ehf., for UA ltd. Delivered 2017.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Viðey ER 50', '', '11');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed for HB Grandi ltd. Delivered 2017.';

      projectCounter += 1;
      this.projects[projectCounter] = new Project ('Akurey AK 10', '', '12');
      this.projects[projectCounter].description = 'Fresh fish trawler. Designed for HB Grandi ltd. Delivered 2017.';
    }
    this.event.emit('updated');
  }
}
