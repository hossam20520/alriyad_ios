import { TestBed } from '@angular/core/testing';

import { CheckUserDataService } from './check-user-data.service';

describe('CheckUserDataService', () => {
  let service: CheckUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
