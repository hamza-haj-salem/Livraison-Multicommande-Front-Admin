import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Commande } from 'src/app/model/commande';
import { Livreur } from 'src/app/model/Livreur';

@Component({
  selector: 'app-affecter-commande-livreur',
  templateUrl: './affecter-commande-livreur.component.html',
  styleUrls: ['./affecter-commande-livreur.component.scss']
})
export class AffecterCommandeLivreurComponent implements OnInit {
  listeLivreurs: any = [];
  commande: Commande;
  idLivreurSelectionne: number;
  livreurSelectionne: any = Livreur;
  afficherListeLivreur: boolean = true; // ceci pour eviter d'affecter une commande deux fois
  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,) {

    this.retrieve();
    if (this.commande.etat != "en attente d'affectation") {
      this.afficherListeLivreur = false;
    } else {
      this.afficherListeLivreur = true;
    }
    console.log(this.commande)
    this.serv.getListeLivreurs().subscribe(
      (data) => {
        this.listeLivreurs = data;
        console.log(this.listeLivreurs);
      }, (err) => {

      }
    )
  }
  retrieve() {
    this.commande = this.local.retrieve("commande");
  }

  ngOnInit(): void {
  }
  

  affecterCommande(commande) {
    console.log(this.idLivreurSelectionne);
    this.serv.getLivreurById(this.idLivreurSelectionne).subscribe(
      (data) => {
        this.livreurSelectionne = data;
        console.log(this.livreurSelectionne);
        this.commande.livreur = this.livreurSelectionne;
        this.commande.etat = "en attente de livraison";
        this.serv.ajouterCmdFb(this.commande);
        console.log(this.commande);
        this.afficherListeLivreur = !this.afficherListeLivreur;
        this.serv.modifierCommande(commande).subscribe(
          (data) => {

            console.log(commande);
            this.route.navigate(["/listeCommandes"]);
          }, (err) => { }
        )


      }, (err) => { }
    )

    /* 
      if (commande.adresseLivraison != this.livreurSelectionne.secteur) {
      console.log(commande.adresseLivraison,+"&&"+ this.livreurSelectionne.secteur)
      this.commande.livreur = this.livreurSelectionne;
      this.commande.etat = "en attente de livraison";
      this.local.store("commandeMalAffecté", commande);
      this.route.navigate(["/alerte"]);
    }else {

      console.log(this.livreurSelectionne);
      this.serv.ajouterCmdFb(this.commande);
      console.log(this.commande);
      this.afficherListeLivreur = !this.afficherListeLivreur;
      this.serv.modifierCommande(commande).subscribe(
        (data) => {

          console.log(commande);
          this.route.navigate(["/listeCommandes"]);
        }, (err) => { }
      )
    }
    */



  }
}
