import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteMessagerieComponent } from './boite-messagerie.component';

describe('BoiteMessagerieComponent', () => {
  let component: BoiteMessagerieComponent;
  let fixture: ComponentFixture<BoiteMessagerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteMessagerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
