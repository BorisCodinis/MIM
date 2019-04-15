import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronikelementComponent } from './chronikelement.component';

describe('ChronikelementComponent', () => {
  let component: ChronikelementComponent;
  let fixture: ComponentFixture<ChronikelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronikelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronikelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
