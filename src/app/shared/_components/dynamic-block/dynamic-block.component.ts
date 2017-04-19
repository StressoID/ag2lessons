import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../../_questions/base.question';

@Component({
  selector: 'app-dynamic-block',
  templateUrl: './dynamic-block.component.html',
  styleUrls: ['./dynamic-block.component.scss']
})
export class DynamicBlockComponent implements OnInit {

  @Input() questions: QuestionBase<any>[];
  @Input() block: FormGroup;
  @Input() title: string;
  @Input() code: string;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() { }
}
