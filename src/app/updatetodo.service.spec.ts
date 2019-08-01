import { TestBed } from '@angular/core/testing';

import { UpdatetodoService } from './updatetodo.service';

describe('UpdatetodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatetodoService = TestBed.get(UpdatetodoService);
    expect(service).toBeTruthy();
  });
});
