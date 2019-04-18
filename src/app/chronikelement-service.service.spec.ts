import { TestBed } from '@angular/core/testing';

import { ChronikelementServiceService } from './chronikelement-service.service';

describe('ChronikelementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChronikelementServiceService = TestBed.get(ChronikelementServiceService);
    expect(service).toBeTruthy();
  });
});
