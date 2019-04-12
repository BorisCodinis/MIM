import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WirComponent } from './wir.component';

describe('WirComponent', () => {
  let component: WirComponent;
  let fixture: ComponentFixture<WirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
