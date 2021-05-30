import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-alerte-de-suppression',
  templateUrl: './alerte-de-suppression.component.html',
  styleUrls: ['./alerte-de-suppression.component.scss']
})
export class AlerteDeSuppressionComponent implements OnInit {
  idProduit: number;
  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,) {
    this.getIdProduitASupprimee();
  }

  ngOnInit(): void {
  }
  getIdProduitASupprimee() {
    this.idProduit = this.local.retrieve("idProduit")
  }
  SupprimerProduit(idProduit) {
    console.log(this.idProduit)
    this.serv.deleteProduitById(idProduit).subscribe(
      (data) => {
        this.route.navigate(["/listeProduits"]);
      }, (err) => { }
    )
  }
  annulerSuppresiion() {
    this.route.navigate(["/listeProduits"]);

  }

}
