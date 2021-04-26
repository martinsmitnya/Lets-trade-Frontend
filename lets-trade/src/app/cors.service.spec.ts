/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CorsService } from './cors.service';

describe('Service: Cors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorsService]
    });
  });

  it('should ...', inject([CorsService], (service: CorsService) => {
    expect(service).toBeTruthy();
  }));
});
