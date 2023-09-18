import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {CertsComponent} from './component/certs/certs.component';
import {ContactsComponent} from './component/contacts/contacts.component';
import {DesignComponent} from './component/design/design.component';
import {ProjectsComponent} from './component/projects/projects.component';
import {VacancyComponent} from './component/vacancy/vacancy.component';
import {SawcComponent} from './component/sawc/sawc.component';
import {ProjectDetailsComponent} from './component/project-details/project-details.component';
import {ModelComponent} from './component/model/model.component';
import {ServicesComponent} from './component/services/services.component';
import {BirthdayComponent} from './component/birthday/birthday.component';
import {Newyear2022Component} from './component/newyear2022/newyear2022.component';
import {VacancyDetailsComponent} from "./component/vacancy/vacancy-details/vacancy-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomeComponent'} },
  { path: 'certs', component: CertsComponent, data: {animation: 'CertsComponent'} },
  { path: 'contacts', component: ContactsComponent, data: {animation: 'ContactsComponent'} },
  { path: 'design', component: DesignComponent, data: {animation: 'DesignComponent'} },
  { path: 'services', component: ServicesComponent, data: {animation: 'ServicesComponent'} },
  { path: 'projects', component: ProjectsComponent, data: {animation: 'ProjectsComponent'} },
  { path: 'vacancy', component: VacancyComponent, data: {animation: 'VacancyComponent'} },
  { path: 'sawc', component: SawcComponent, data: {animation: 'SawcComponent'} },
  { path: 'project-details', component: ProjectDetailsComponent, data: {animation: 'ProjectDetailsComponent'} },
  { path: 'model', component: ModelComponent, data: {animation: 'ModelComponent'} },
  { path: 'birthday', component: BirthdayComponent, data: {animation: 'BirthdayComponent'} },
  { path: 'newyear2022', component: Newyear2022Component, data: {animation: 'Newyear2022Component'} },
  { path: 'vacancy-details', component: VacancyDetailsComponent, data: {animation: 'VacancyDetailsComponent'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
