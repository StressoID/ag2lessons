import {Validators} from '@angular/forms';
import { TextboxQuestion } from './_questions/textbox.question';

export class TestForm {

  public blocks: IBlock[];

  constructor() {

    this.blocks = [
      {
        title: 'Паспортные данные',
        code: 'passport_info',
        questions: [
          new TextboxQuestion({
            key: 'serial',
            label: 'Серия паспорта',
            value: '',
            mask: '9999',
            type: 'text',
            max: 4,
            validationRules: [
              Validators.required
            ]
          })
        ]
      },
      {
        title: 'Персональная информация',
        code: 'about',
        questions: [
          new TextboxQuestion({
            key: 'first_name',
            label: 'Имя',
            value: '',
            type: 'text',
            validationRules: [
              Validators.required,
            ],
          }),
          new TextboxQuestion({
            key: 'last_name',
            label: 'Фамилия',
            value: '',
            type: 'text',
            validationRules: [
              Validators.required,
            ],
            validationMessage: 'Required'
          })]
      }
    ];
  }
}

interface IBlock {
  title: string;
  code: string;
  questions: Array<any>;
}
