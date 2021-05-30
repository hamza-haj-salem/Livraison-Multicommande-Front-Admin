import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCommandeComponent } from './archive-commande.component';

describe('ArchiveCommandeComponent', () => {
  let component: ArchiveCommandeComponent;
  let fixture: ComponentFixture<ArchiveCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
