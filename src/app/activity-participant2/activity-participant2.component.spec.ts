import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityParticipant2Component } from './activity-participant2.component';

describe('ActivityParticipant2Component', () => {
  let component: ActivityParticipant2Component;
  let fixture: ComponentFixture<ActivityParticipant2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityParticipant2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityParticipant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
