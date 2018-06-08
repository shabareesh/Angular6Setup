import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalListComponent } from './interval-list.component';

describe('IntervalListComponent', () => {
  let component: IntervalListComponent;
  let fixture: ComponentFixture<IntervalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
