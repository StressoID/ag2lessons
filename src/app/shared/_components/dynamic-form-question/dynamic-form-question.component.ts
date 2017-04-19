import { Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../_questions/base.question';

@Component({
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnChanges  {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @Input() disabled: boolean = false;

  constructor(public elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.disabled) {
      this.form.controls[this.question.key].disable({ onlySelf: true });
    } else {
      this.form.controls[this.question.key].enable({ onlySelf: true });
    }
  }

  get isValid() {
    return this.form.controls[this.question.key].valid && this.form.controls[this.question.key].touched;
  }

}
