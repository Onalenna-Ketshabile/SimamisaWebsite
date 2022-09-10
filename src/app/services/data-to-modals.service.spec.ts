import { TestBed } from '@angular/core/testing';

import { DataToModalsService } from './data-to-modals.service';

describe('DataToModalsService', () => {
  let service: DataToModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataToModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
