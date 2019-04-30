import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektelemetComponent } from './projektelemet.component';

describe('ProjektelemetComponent', () => {
  let component: ProjektelemetComponent;
  let fixture: ComponentFixture<ProjektelemetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektelemetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektelemetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
