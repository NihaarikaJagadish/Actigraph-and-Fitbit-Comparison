import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdithComponent } from './udith.component';

describe('UdithComponent', () => {
  let component: UdithComponent;
  let fixture: ComponentFixture<UdithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
