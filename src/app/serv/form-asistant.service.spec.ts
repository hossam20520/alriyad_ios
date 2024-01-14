import { TestBed } from '@angular/core/testing';

import { FormAssistantService } from './form-asistant.service';

describe('FormAssistantService', () => {
  let service: FormAssistantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAssistantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
