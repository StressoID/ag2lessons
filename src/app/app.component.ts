import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Уроки по Angular 2!';
  public menuItems: Array<Object> = [
    {
      icon: 'dialpad',
      title: 'Лекции',
      route: '/lectures'
    },
  ];
}
