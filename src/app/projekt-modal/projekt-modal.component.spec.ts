import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektModalComponent } from './projekt-modal.component';

describe('ProjektModalComponent', () => {
  let component: ProjektModalComponent;
  let fixture: ComponentFixture<ProjektModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
