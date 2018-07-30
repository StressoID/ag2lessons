import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-form-builder-component',
  templateUrl: './form-builder-component.component.html',
  styleUrls: ['./form-builder-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormBuilderComponentComponent implements OnInit {

  public builderForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.builderForm = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.minLength(6)],
      phone: [null, CustomValidators.phone('RU')]
    });
  }

  save() {
    debugger;
    console.log(this.builderForm.value);
  }

}
