import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderComponentComponent } from './form-builder-component.component';

describe('FormBuilderComponentComponent', () => {
  let component: FormBuilderComponentComponent;
  let fixture: ComponentFixture<FormBuilderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
