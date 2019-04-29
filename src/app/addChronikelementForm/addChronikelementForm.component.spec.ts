import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChronikelementFormComponent } from './addChronikelementForm.component';

describe('AddChronikelementFormComponent', () => {
  let component: AddChronikelementFormComponent;
  let fixture: ComponentFixture<AddChronikelementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChronikelementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChronikelementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
