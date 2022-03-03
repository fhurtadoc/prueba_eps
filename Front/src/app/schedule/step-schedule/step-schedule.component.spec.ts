import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepScheduleComponent } from './step-schedule.component';

describe('StepScheduleComponent', () => {
  let component: StepScheduleComponent;
  let fixture: ComponentFixture<StepScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
