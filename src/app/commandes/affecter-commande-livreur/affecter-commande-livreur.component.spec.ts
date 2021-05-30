import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterCommandeLivreurComponent } from './affecter-commande-livreur.component';

describe('AffecterCommandeLivreurComponent', () => {
  let component: AffecterCommandeLivreurComponent;
  let fixture: ComponentFixture<AffecterCommandeLivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffecterCommandeLivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterCommandeLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
