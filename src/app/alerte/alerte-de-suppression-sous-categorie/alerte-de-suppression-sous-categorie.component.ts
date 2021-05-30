import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-alerte-de-suppression-sous-categorie',
  templateUrl: './alerte-de-suppression-sous-categorie.component.html',
  styleUrls: ['./alerte-de-suppression-sous-categorie.component.scss']
})
export class AlerteDeSuppressionSousCategorieComponent implements OnInit {
  idSousCategorie: number;
  constructor(private serv: LivraisonMulticommandeService,
              private local: LocalStorageService,
              private route: Router,) {
                this.getIdSousCategorieASupprimee();
               }

  ngOnInit(): void {
  }

  getIdSousCategorieASupprimee() {
    this.idSousCategorie = this.local.retrieve("idSousCategorie")
  }
  SupprimerSousCatgorie(idSousCategorie) {
    console.log(this.idSousCategorie)
    this.serv.deleteSousCategorieById(idSousCategorie).subscribe(
      (data) => {
        this.route.navigate(["/listeSousCategories"]);
      }, (err) => { }
    )
  }
  annulerSuppresiion() {
    this.route.navigate(["/listeSousCategories"]);
  }

}
