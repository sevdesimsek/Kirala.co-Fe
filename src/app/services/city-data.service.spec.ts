import { TestBed } from '@angular/core/testing';

import { cityDataService } from './city-data.service';

describe('CityDataService', () => {
  let service: cityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject( cityDataService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
