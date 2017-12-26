import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TestComponent } from './test/test.component';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Уроки по Angular 2!';
  public menuItems: Array<Object> = [
    {
      icon: 'dialpad',
      title: 'Лекции',
      route: '/lectures',
    },
  ];

  public authForm: FormGroup;

  constructor(public dialog: MatDialog) {
    this.authForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    });
  }

  public openModal() {
    this.dialog.open(TestComponent, { data: { name: 'angular lessons' } });
  }

  public save() {
    console.log(this.authForm);
  }
}
