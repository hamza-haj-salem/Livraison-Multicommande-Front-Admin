import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Commande } from 'src/app/model/commande';

@Component({
  selector: 'app-affecter-commande-livreur',
  templateUrl: './affecter-commande-livreur.component.html',
  styleUrls: ['./affecter-commande-livreur.component.scss']
})
export class AffecterCommandeLivreurComponent implements OnInit {
  listeLivreurs:any=[]
  commande:Commande;
  afficherListeLivreur:boolean=true; // ceci pour eviter d'affecter une commande deux fois
  constructor(private serv: LivraisonMulticommandeService,
              private local: LocalStorageService,
              private route: Router,) {
                
                this.retrieve();
                if(this.commande.etat=="en cours"){
                  this.afficherListeLivreur=false;
                }else{
                  this.afficherListeLivreur=true;
                }
                console.log(this.commande)
                this.serv.getListeLivreurs().subscribe(
                  (data) => {
                    this.listeLivreurs = data;
                  }, (err) => {

      }
    )
  }
  retrieve() {
    this.commande = this.local.retrieve("commande");
  }

  ngOnInit(): void {
  }

  affecterCommande(commande){
    this.commande.etat="en cours";
    this.afficherListeLivreur=!this.afficherListeLivreur;
    this.serv.modifierCommande(commande).subscribe(
      (data)=>{
        console.log(commande);
        this.route.navigate(["/listeCommandes"]);
      },(err)=>{}
    )
    
  }
}
