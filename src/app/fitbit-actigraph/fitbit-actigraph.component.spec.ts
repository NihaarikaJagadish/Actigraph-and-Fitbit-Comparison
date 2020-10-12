import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitbitActigraphComponent } from './fitbit-actigraph.component';

describe('FitbitActigraphComponent', () => {
  let component: FitbitActigraphComponent;
  let fixture: ComponentFixture<FitbitActigraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitbitActigraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitbitActigraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
