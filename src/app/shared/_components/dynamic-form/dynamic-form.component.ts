import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormService } from '../../form.service';
@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

  @Input() formModel;
  public form: FormGroup;

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.form = this.formService.toFormGroupBlocks(this.formModel);
  }
}
