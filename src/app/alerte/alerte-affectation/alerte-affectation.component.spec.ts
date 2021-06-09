import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteAffectationComponent } from './alerte-affectation.component';

describe('AlerteAffectationComponent', () => {
  let component: AlerteAffectationComponent;
  let fixture: ComponentFixture<AlerteAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
