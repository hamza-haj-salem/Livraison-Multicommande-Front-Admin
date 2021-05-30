import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteDeSuppressionClientComponent } from './alerte-de-suppression-client.component';

describe('AlerteDeSuppressionClientComponent', () => {
  let component: AlerteDeSuppressionClientComponent;
  let fixture: ComponentFixture<AlerteDeSuppressionClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteDeSuppressionClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteDeSuppressionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
