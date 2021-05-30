import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from '../livraison-multicommande.service';
import { Livreur } from '../model/Livreur';

@Component({
  selector: 'app-liste-livreurs',
  templateUrl: './liste-livreurs.component.html',
  styleUrls: ['./liste-livreurs.component.scss']
})
export class ListeLivreursComponent implements OnInit {
  listeLivreurs:any=[]
  livreurEdit:any={id:null,nom:"",prenom:"",image_id:null};
  

  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,
              ) { 
    
    this.serv.getListeLivreurs().subscribe(
      (data)=>{
        this.listeLivreurs=data;
      },(err)=>{

      }
    )
  }

  ngOnInit(): void {
  }
  
  alerte(idLivreur){
    this.local.store("idLivreur",idLivreur);
    this.route.navigate(["/alerteSuppressionLivreur"]);
  }
  EditLivreur(idLiv){
   this.serv.getLivreurById(idLiv).subscribe(
     (data)=>{
       this.livreurEdit=data;
       console.log("liste"+this.livreurEdit)
       this.local.store("livreurEdit",this.livreurEdit);
       console.log("liste"+this.livreurEdit)
       this.route.navigate(["/editLivreur"]);
     },(err)=>{}
   )
  }
  
  

}
