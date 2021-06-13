import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.scss']
})
export class ListeCommandeComponent implements OnInit {
  listeCommandes:any=[]
  
  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) {
                this.serv.getListeCommandes().subscribe(
                  (data)=>{
                    this.listeCommandes=data;
                  },(err)=>{}
                )

                
               }

  ngOnInit(): void {
  }
  affecterCommande(c){
    console.log(c);
    this.local.store("commande",c);
    this.route.navigate(["/affecterCommande"]);
  }
  archiverCommande(c){
    this.serv.ajouterArchiveCommande(c).subscribe(
      (data)=>{
        this.serv.getListeCommandes().subscribe(
          (data)=>{
            this.listeCommandes=data;
          },(err)=>{}
        )
      },(err)=>{}
    )
  }
  details(c){
    this.local.store("cmdDetails",c);
    this.route.navigate[("detailsCommande")];
  }

}
