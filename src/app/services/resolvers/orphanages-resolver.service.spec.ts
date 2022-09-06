import { TestBed } from '@angular/core/testing';

import { OrphanagesResolverService } from './orphanages-resolver.service';

describe('OrphanagesResolverService', () => {
  let service: OrphanagesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrphanagesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
