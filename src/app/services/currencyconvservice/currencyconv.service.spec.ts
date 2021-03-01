import { TestBed } from '@angular/core/testing';

import { CurrencyconvService } from './currencyconv.service';

describe('CurrencyconvService', () => {
  let service: CurrencyconvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyconvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
