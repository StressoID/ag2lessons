import { Component } from '@angular/core';
import { FormService } from './shared/form.service';
import { TestForm } from './shared/test.form';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Уроки по Angular 2!';
  public testForm: FormGroup;
  public testModel = new TestForm();
  public menuItems: Array<Object> = [
    {
      icon: 'dialpad',
      title: 'Итем 1'
    },
    {
      icon: 'voicemail',
      title: 'Итем 2'
    },
    {
      icon: 'notifications_off',
      title: 'Итем 3'
    }
  ];

  constructor(private formService: FormService) {
    this.testForm = this.formService.toFormGroupBlocks(this.testModel);
  }

  check(form) {
    console.log(form);
  }
}
