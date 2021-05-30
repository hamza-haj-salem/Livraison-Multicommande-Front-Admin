import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteDeSuppressionSousCategorieComponent } from './alerte-de-suppression-sous-categorie.component';

describe('AlerteDeSuppressionSousCategorieComponent', () => {
  let component: AlerteDeSuppressionSousCategorieComponent;
  let fixture: ComponentFixture<AlerteDeSuppressionSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteDeSuppressionSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteDeSuppressionSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
