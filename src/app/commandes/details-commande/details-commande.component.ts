import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Commande } from 'src/app/model/commande';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.scss']
})
export class DetailsCommandeComponent implements OnInit {
commande:Commande;
  constructor(private serv:LivraisonMulticommandeService,
    private local:LocalStorageService,
    private route:Router,) {
      this.commande=this.local.retrieve("cmdDetails")
     }

  ngOnInit(): void {
  }

}
