import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditerLivreurComponent } from './editer-livreur.component';

describe('EditerLivreurComponent', () => {
  let component: EditerLivreurComponent;
  let fixture: ComponentFixture<EditerLivreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditerLivreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditerLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
