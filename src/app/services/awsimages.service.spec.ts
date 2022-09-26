import { TestBed } from '@angular/core/testing';

import { AwsimagesService } from './awsimages.service';

describe('AwsimagesService', () => {
  let service: AwsimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
