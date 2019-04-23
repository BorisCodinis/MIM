import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore_service';

describe('Firestore_service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreService = TestBed.get(FirestoreService);
    expect(service).toBeTruthy();
  });
});
