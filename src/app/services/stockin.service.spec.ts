import { TestBed } from '@angular/core/testing';

import { StockinService } from './stockin.service';

describe('StockinService', () => {
  let service: StockinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
