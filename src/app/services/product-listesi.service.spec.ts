import { TestBed } from '@angular/core/testing';

import { ProductListesiService } from './product-listesi.service';

describe('ProductListesiService', () => {
  let service: ProductListesiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListesiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
