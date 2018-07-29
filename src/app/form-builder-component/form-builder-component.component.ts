import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      login: null,
      password: null
    });
  }

  save() {
    console.log(this.builderForm.value);
  }

}
