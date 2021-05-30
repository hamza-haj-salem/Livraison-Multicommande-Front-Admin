import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerSousCategorieComponent } from './editer-sous-categorie.component';

describe('EditerSousCategorieComponent', () => {
  let component: EditerSousCategorieComponent;
  let fixture: ComponentFixture<EditerSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
