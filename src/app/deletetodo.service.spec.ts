import { TestBed } from '@angular/core/testing';

import { DeletetodoService } from './deletetodo.service';

describe('DeletetodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletetodoService = TestBed.get(DeletetodoService);
    expect(service).toBeTruthy();
  });
});
