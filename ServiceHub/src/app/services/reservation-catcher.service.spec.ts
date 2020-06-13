import { TestBed } from '@angular/core/testing';

import { ReservationCatcherService } from './reservation-catcher.service';

describe('ReservationCatcherService', () => {
  let service: ReservationCatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationCatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
