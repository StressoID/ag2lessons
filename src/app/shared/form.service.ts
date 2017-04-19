import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable()
export class FormService {

  constructor() {
  }

  toFormGroupBlocks(formModel) {
    let group: any = {};
    const form = {};

    formModel.blocks.forEach(block => {
      block.questions.forEach(question => {
        group[question.key] = new FormControl(question.value, question.validationRules);
      });
      form[block.code] = new FormGroup(group);
      group = {};
    });

    return new FormGroup(form);
  }

  toFormGroupQuestions(formModel) {
    const group: any = {};

    formModel.questions.forEach(question => {
      group[question.key] = new FormControl(question.value, question.validationRules);
    });
    return new FormGroup(group);
  }
}
