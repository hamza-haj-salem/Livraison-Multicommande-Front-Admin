import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-alerte-de-suppression-livreur',
  templateUrl: './alerte-de-suppression-livreur.component.html',
  styleUrls: ['./alerte-de-suppression-livreur.component.scss']
})
export class AlerteDeSuppressionLivreurComponent implements OnInit {
  idLivreur: number;
  constructor(private serv: LivraisonMulticommandeService,
              private local: LocalStorageService,
              private route: Router,) { 
                this.getIdLivreurASupprimee();
              }

  ngOnInit(): void {
  }

  getIdLivreurASupprimee() {
    this.idLivreur = this.local.retrieve("idLivreur")
  }
  SupprimerLivreur(idLivreur) {
    console.log(this.idLivreur)
    this.serv.deleteLivreurById(idLivreur).subscribe(
      (data) => {
        this.route.navigate(["/listeLivreurs"]);
        
      }, (err) => { }
    )
  }
  annulerSuppresiion() {
    this.route.navigate(["/listeLivreurs"]);
  }

}
