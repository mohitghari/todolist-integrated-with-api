import { TestBed } from '@angular/core/testing';

import { AddtodoService } from './addtodo.service';

describe('AddtodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtodoService = TestBed.get(AddtodoService);
    expect(service).toBeTruthy();
  });
});
