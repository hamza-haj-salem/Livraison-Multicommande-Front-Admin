import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteDeSuppressionCategorieComponent } from './alerte-de-suppression-categorie.component';

describe('AlerteDeSuppressionCategorieComponent', () => {
  let component: AlerteDeSuppressionCategorieComponent;
  let fixture: ComponentFixture<AlerteDeSuppressionCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteDeSuppressionCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteDeSuppressionCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
