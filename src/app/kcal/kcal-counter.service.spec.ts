import { TestBed } from '@angular/core/testing';

import { KcalCounterService } from './kcal-counter.service';

describe('KcalCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KcalCounterService = TestBed.get(KcalCounterService);
    expect(service).toBeTruthy();
  });
});
