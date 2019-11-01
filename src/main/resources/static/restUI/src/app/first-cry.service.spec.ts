import { TestBed } from '@angular/core/testing';

import { FirstCryService } from './first-cry.service';

describe('FirstCryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstCryService = TestBed.get(FirstCryService);
    expect(service).toBeTruthy();
  });
});
