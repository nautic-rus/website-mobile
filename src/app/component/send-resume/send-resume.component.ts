import { Component, OnInit } from '@angular/core';
import {TranslationService} from '../../translation.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Vacancy} from './vacancy';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-send-resume',
  templateUrl: './send-resume.component.html',
  styleUrls: ['./send-resume.component.css']
})
export class SendResumeComponent implements OnInit {

  sendResume = new FormGroup({
    surname: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('[\\w\.]+@[\\w]+\\.[\\w]+')]),
  });
  loaded: string[] = [];
  awaitForLoad: string[] = [];
  vacancyName = '';

  constructor(public t: TranslationService, public ref: DynamicDialogRef, public http: HttpClient, public conf: DynamicDialogConfig) {
    this.vacancyName = conf.data;
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    const vc = new Vacancy();
    vc.name = this.sendResume.get('name').value;
    vc.surname = this.sendResume.get('surname').value;
    vc.phone = this.sendResume.get('phone').value;
    vc.email = this.sendResume.get('email').value;
    vc.detailsFile = this.loaded;
    vc.vacancyName = this.vacancyName;
    console.log(vc);
    this.http.post<string>(environment.http + 'vacancyResponse', vc).subscribe(res => {
      console.log(res);
      this.ref.close();
    });
  }

  onFilesDrop(event: DragEvent): void {
    event.preventDefault();
    this.handleFileInput(event.dataTransfer.files);
  }

  handleFileInput(files: FileList): void {
    if (files != null){
      for (let x = 0; x < files.length; x++){
        const file = files.item(x);
        if (file != null){
          // @ts-ignore
          const find = this.loaded.find(x => x.name == file.name);
          if (find != null){
            this.loaded.splice(this.loaded.indexOf(find), 1);
          }
          this.awaitForLoad.push(file.name);
        }
      }
      for (let x = 0; x < files.length; x++){
        const file = files.item(x);
        if (file != null){
          const formData: FormData = new FormData();
          formData.append('file', file, encodeURI(file.name));
          this.http.post<string>(environment.http + 'uploads/file', formData).subscribe(res => {
            this.loaded.push(decodeURI(res));
          });
        }
      }
    }
  }

  getFileName(file: string): string {
    const split = file.split('/');
    return decodeURI(split[split.length - 1]);
  }

  close() {
    this.ref.close();
  }

  deleteFile(file: string) {
    this.loaded.splice(this.loaded.indexOf(file), 1);
  }

}
