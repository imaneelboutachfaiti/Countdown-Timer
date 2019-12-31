import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventTimerComponent } from './create-event-timer.component';

describe('CreateEventTimerComponent', () => {
  let component: CreateEventTimerComponent;
  let fixture: ComponentFixture<CreateEventTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
