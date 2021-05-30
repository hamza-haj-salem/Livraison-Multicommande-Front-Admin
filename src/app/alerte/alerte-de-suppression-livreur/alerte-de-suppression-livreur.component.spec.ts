import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteDeSuppressionLivreurComponent } from './alerte-de-suppression-livreur.component';

describe('AlerteDeSuppressionLivreurComponent', () => {
  let component: AlerteDeSuppressionLivreurComponent;
  let fixture: ComponentFixture<AlerteDeSuppressionLivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteDeSuppressionLivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteDeSuppressionLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
