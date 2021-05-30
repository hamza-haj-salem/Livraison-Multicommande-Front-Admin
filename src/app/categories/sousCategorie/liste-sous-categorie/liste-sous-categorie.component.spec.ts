import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSousCategorieComponent } from './liste-sous-categorie.component';

describe('ListeSousCategorieComponent', () => {
  let component: ListeSousCategorieComponent;
  let fixture: ComponentFixture<ListeSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
