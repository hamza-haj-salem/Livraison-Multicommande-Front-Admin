import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteDeSuppressionComponent } from './alerte-de-suppression.component';

describe('AlerteDeSuppressionComponent', () => {
  let component: AlerteDeSuppressionComponent;
  let fixture: ComponentFixture<AlerteDeSuppressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteDeSuppressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteDeSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
