import { TestBed } from '@angular/core/testing';

import { OpenSnackBarService } from './open-snack-bar.service';

describe('OpenSnackBarService', () => {
  let service: OpenSnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenSnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
