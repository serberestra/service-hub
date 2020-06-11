import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerivicelistComponent } from './service-list.component';

describe('SerivicelistComponent', () => {
  let component: SerivicelistComponent;
  let fixture: ComponentFixture<SerivicelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerivicelistComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerivicelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
