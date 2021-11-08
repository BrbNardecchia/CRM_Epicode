import { TestBed } from '@angular/core/testing';

import { StatoFatturaService } from './stato-fattura.service';

describe('StatoFatturaService', () => {
  let service: StatoFatturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatoFatturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
