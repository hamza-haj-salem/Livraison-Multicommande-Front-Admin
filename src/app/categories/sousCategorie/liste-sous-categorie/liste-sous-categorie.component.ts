import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-liste-sous-categorie',
  templateUrl: './liste-sous-categorie.component.html',
  styleUrls: ['./liste-sous-categorie.component.scss']
})
export class ListeSousCategorieComponent implements OnInit {
  categorie:any={id:null,titre:""};
  titreCategorie:string;
  listeSousCategories:any=[]
  categorieEdit:any={id:null,titre:""};
  sousCategorieEdit:any={id:null,titre:"",categorieEdit:this.categorieEdit};

  constructor(private serv:LivraisonMulticommandeService,
    private local:LocalStorageService,
    private route:Router,) {
    this.retrieve();
    this.serv.getListeSousCategorieByTitreCategorie(this.titreCategorie).subscribe(
      (data)=>{
        this.listeSousCategories=data;
      },(err)=>{}
    )
   }

  retrieve(){
    this.titreCategorie=this.local.retrieve("titreCategorie");
  }

  ngOnInit(): void {
  }
  SupprimerSousCategorie(idSousCat){
    this.serv.deleteSousCategorieById(idSousCat).subscribe(
      (data)=>{
        this.serv.getListeSousCategories().subscribe(
          (data)=>{
            this.listeSousCategories=data;
          },(err)=>{}
        )
      },(err)=>{}
    )
  }
  alerte(idSousCategorie){
    this.local.store("idSousCategorie",idSousCategorie);
    this.route.navigate(["/alerteSuppressionSousCategorie"]);
  }

  EditerSousCategorie(idSousCat){
    this.serv.getSousCategorieById(idSousCat).subscribe(
      (data)=>{
        this.sousCategorieEdit=data;
        this.serv.getCategorieByIdSousCategorie(idSousCat).subscribe(
          (data)=>{
            console.log("ml fct fl liste souscat"+this.sousCategorieEdit.titre);
            this.sousCategorieEdit.categorieEdit=data;
            console.log("ml fct fl liste cat"+this.sousCategorieEdit.categorieEdit.titre);
            this.local.store("sousCategorieEdit",this.sousCategorieEdit);
            this.local.store("categorieEdit",this.sousCategorieEdit.categorieEdit);
            this.route.navigate(["/editSousCategorie"]);
          },(err)=>{}
        )
        
        
        
      },(err)=>{}
    )
  }

}
