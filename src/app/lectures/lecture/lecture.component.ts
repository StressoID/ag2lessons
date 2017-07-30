import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {
    ar.params.subscribe(param =>  console.log(param));
  }

  ngOnInit() {
  }

}
