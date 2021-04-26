import { TestBed } from '@angular/core/testing';

import { TradeApiService } from './trade-api.service';

describe('TradeApiService', () => {
  let service: TradeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
