import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitbitBothComponent } from './fitbit-both.component';

describe('FitbitBothComponent', () => {
  let component: FitbitBothComponent;
  let fixture: ComponentFixture<FitbitBothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitbitBothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitbitBothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
