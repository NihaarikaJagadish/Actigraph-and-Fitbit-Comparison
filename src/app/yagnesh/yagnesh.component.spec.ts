import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YagneshComponent } from './yagnesh.component';

describe('YagneshComponent', () => {
  let component: YagneshComponent;
  let fixture: ComponentFixture<YagneshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YagneshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YagneshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
