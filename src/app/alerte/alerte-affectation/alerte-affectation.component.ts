import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Commande } from 'src/app/model/commande';

@Component({
  selector: 'app-alerte-affectation',
  templateUrl: './alerte-affectation.component.html',
  styleUrls: ['./alerte-affectation.component.scss']
})
export class AlerteAffectationComponent implements OnInit {
commande:Commande;
  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,
    ) { 
      this.commande=this.local.retrieve("commandeMalAffecté");
    }
    annulerAffectation(){
      this.route.navigate(["/listeCommandes"]);
    }
    affecterCommande(){
      this.serv.ajouterCmdFb(this.commande);
      this.serv.modifierCommande(this.commande).subscribe(
        (data) => {

          console.log(this.commande);
          this.route.navigate(["/listeCommandes"]);
        }, (err) => { }
      )
    }

  ngOnInit(): void {
  }

}
