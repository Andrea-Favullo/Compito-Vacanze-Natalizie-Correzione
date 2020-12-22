import { TestBed } from '@angular/core/testing';

import { StatiServiceService } from './stati-service.service';

describe('StatiServiceService', () => {
  let service: StatiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
