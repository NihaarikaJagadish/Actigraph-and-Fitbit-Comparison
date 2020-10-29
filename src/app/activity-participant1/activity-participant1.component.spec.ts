import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityParticipant1Component } from './activity-participant1.component';

describe('ActivityParticipant1Component', () => {
  let component: ActivityParticipant1Component;
  let fixture: ComponentFixture<ActivityParticipant1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityParticipant1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityParticipant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
