import { TestBed } from '@angular/core/testing';

import { CaseidService } from './caseid.service';

describe('CaseidService', () => {
  let service: CaseidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
