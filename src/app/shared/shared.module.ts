import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormService } from './form.service';
import { DynamicFormComponent } from './_components/dynamic-form/dynamic-form.component';
import { DynamicBlockComponent } from './_components/dynamic-block/dynamic-block.component';
import { DynamicFormQuestionComponent } from './_components/dynamic-form-question/dynamic-form-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    DynamicFormComponent,
    DynamicBlockComponent,
    DynamicFormQuestionComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicBlockComponent,
    DynamicFormQuestionComponent
  ],
  providers: [FormService]
})
export class SharedModule { }
