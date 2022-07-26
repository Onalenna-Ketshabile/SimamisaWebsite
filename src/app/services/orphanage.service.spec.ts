import { TestBed } from '@angular/core/testing';

import { OrphanageService } from './orphanage.service';

describe('OrphanageService', () => {
  let service: OrphanageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrphanageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
