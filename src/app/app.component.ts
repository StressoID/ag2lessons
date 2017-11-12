import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TestComponent } from './test/test.component';

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

  constructor(public dialog: MatDialog) {}

  public openModal() {
    this.dialog.open(TestComponent, { data: { name: 'angular lessons' } });
  }
}
