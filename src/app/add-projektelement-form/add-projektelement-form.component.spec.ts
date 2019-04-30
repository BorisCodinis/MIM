import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjektelementFormComponent } from './add-projektelement-form.component';

describe('AddProjektelementFormComponent', () => {
  let component: AddProjektelementFormComponent;
  let fixture: ComponentFixture<AddProjektelementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjektelementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjektelementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
