import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationRequestOldComponent } from './reservation-request-old.component';

describe('ReservationRequestOldComponent', () => {
  let component: ReservationRequestOldComponent;
  let fixture: ComponentFixture<ReservationRequestOldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationRequestOldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationRequestOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
