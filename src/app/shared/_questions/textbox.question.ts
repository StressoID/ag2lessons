import {QuestionBase} from './base.question';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  dependentCheckbox: string;
  dependentDropdown: string;
  kladr: boolean;
  onlyNumber: boolean;
  showId: Array<any>;
  maxlength: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || ''; // text, email, date etc.
    this.dependentCheckbox = options['dependentCheckbox'] || '';
    this.dependentDropdown = options['dependentDropdown'] || '';
    this.kladr = options['kladr'] || false;
    this.onlyNumber = options['onlyNumber'] || false;
    this.showId = options['showId'] || false;
    this.maxlength = options['maxlength'] || 999;
  }
}
