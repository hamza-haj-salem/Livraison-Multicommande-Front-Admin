import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-alerte-de-suppression-categorie',
  templateUrl: './alerte-de-suppression-categorie.component.html',
  styleUrls: ['./alerte-de-suppression-categorie.component.scss']
})
export class AlerteDeSuppressionCategorieComponent implements OnInit {
  idCategorie: number;
  constructor(private serv: LivraisonMulticommandeService,
              private local: LocalStorageService,
              private route: Router,) { 
                this.getIdCategorieASupprimee();
              }

  ngOnInit(): void {
  }
  getIdCategorieASupprimee() {
    this.idCategorie = this.local.retrieve("idCategorie")
  }
  SupprimerCategorie(idCategorie) {
    console.log(this.idCategorie)
    this.serv.deleteCategorieById(idCategorie).subscribe(
      (data) => {
        this.route.navigate(["/listeCategories"]);
      }, (err) => { }
    )
  }
  annulerSuppresiion() {
    this.route.navigate(["/listeCategories"]);
  }

}
