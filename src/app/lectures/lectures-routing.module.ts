import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturesComponent } from './lectures.component';
import { LectureComponent } from './lecture/lecture.component';

const routes: Routes = [
  { path: 'lectures', component: LecturesComponent, children: [
    { path: ':id', component: LectureComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturesRoutingModule { }
