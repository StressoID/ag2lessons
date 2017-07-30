import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturesRoutingModule } from './lectures-routing.module';
import { LecturesComponent } from './lectures.component';
import { LectureComponent } from './lecture/lecture.component';

@NgModule({
  imports: [
    CommonModule,
    LecturesRoutingModule
  ],
  declarations: [LecturesComponent, LectureComponent]
})
export class LecturesModule { }
