import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTheSurfComponent } from './rate-the-surf.component';

describe('RateTheSurfComponent', () => {
  let component: RateTheSurfComponent;
  let fixture: ComponentFixture<RateTheSurfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateTheSurfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateTheSurfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
