import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerCategorieComponent } from './editer-categorie.component';

describe('EditerCategorieComponent', () => {
  let component: EditerCategorieComponent;
  let fixture: ComponentFixture<EditerCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
