export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  controlType: string;
  validationRules: Array<any>;
  validationMessage: string;
  mask: string;
  max: string;
  min: string;
  type: string;
  dependentCheckbox: string;
  dependentDropdown: string;
  searchParams: {};
  title: string;
  focus: boolean;

  constructor(
    options: {
      value?: T,
      key?: string,
      label?: string,
      controlType?: string,
      validationRules?: Array<any>,
      validationMessage?: string,
      mask?: string,
      max?: string,
      min?: string,
      type?: string,
      dependentCheckbox?: string,
      dependentDropdown?: string,
      searchParams?: {},
      title?: string,
      focus?: boolean
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.controlType = options.controlType || '';
    this.validationRules = options.validationRules || [];
    this.validationMessage = options.validationMessage || '';
    this.mask = options.mask || '';
    this.max = options.max || '';
    this.min = options.min || '';
    this.type = options.type || '';
    this.dependentCheckbox = options.dependentCheckbox || '';
    this.dependentDropdown = options.dependentDropdown || '';
    this.searchParams = options.searchParams || {};
    this.title = options.title || '';
    this.focus = options.focus || false;
  }
}
