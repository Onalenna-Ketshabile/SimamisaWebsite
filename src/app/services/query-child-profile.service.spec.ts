import { TestBed } from '@angular/core/testing';

import { QueryChildProfileService } from './query-child-profile.service';

describe('QueryChildProfileService', () => {
  let service: QueryChildProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryChildProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
