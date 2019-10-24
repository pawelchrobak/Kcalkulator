import { TestBed } from '@angular/core/testing';

import { FoodServiceService } from './food-service.service';

describe('FoodServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodServiceService = TestBed.get(FoodServiceService);
    expect(service).toBeTruthy();
  });
});
