import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './component/navi/navi.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { CertsComponent } from './component/certs/certs.component';
import {LightboxModule} from 'ngx-lightbox';
import { ContactsComponent } from './component/contacts/contacts.component';
import {DesignComponent} from './component/design/design.component';
import { ProjectsComponent } from './component/projects/projects.component';
import {ParallaxModule} from 'ngx-parallax';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VacancyComponent } from './component/vacancy/vacancy.component';
import { SawcComponent } from './component/sawc/sawc.component';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ModelComponent } from './component/model/model.component';
import { ServicesComponent } from './component/services/services.component';
import {NgxCollapseModule} from 'ngx-collapse';
import { BirthdayComponent } from './component/birthday/birthday.component';
import { Newyear2022Component } from './component/newyear2022/newyear2022.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    FooterComponent,
    HomeComponent,
    CertsComponent,
    ContactsComponent,
    DesignComponent,
    ProjectsComponent,
    VacancyComponent,
    SawcComponent,
    ProjectDetailsComponent,
    ModelComponent,
    ServicesComponent,
    BirthdayComponent,
    Newyear2022Component,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LightboxModule,
    ParallaxModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    FontAwesomeModule,
    HammerModule,
    NgxCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
