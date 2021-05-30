import { TestBed } from '@angular/core/testing';

import { LivraisonMulticommandeService } from './livraison-multicommande.service';

describe('LivraisonMulticommandeService', () => {
  let service: LivraisonMulticommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivraisonMulticommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
