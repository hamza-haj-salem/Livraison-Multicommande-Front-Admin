import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSousCategorieComponent } from './ajouter-sous-categorie.component';

describe('AjouterSousCategorieComponent', () => {
  let component: AjouterSousCategorieComponent;
  let fixture: ComponentFixture<AjouterSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
