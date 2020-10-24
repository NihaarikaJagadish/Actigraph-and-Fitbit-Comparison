import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavanComponent } from './pavan.component';

describe('PavanComponent', () => {
  let component: PavanComponent;
  let fixture: ComponentFixture<PavanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
