import { TestBed } from '@angular/core/testing';

import { PartneringService } from './partnering.service';

describe('PartneringService', () => {
  let service: PartneringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartneringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
