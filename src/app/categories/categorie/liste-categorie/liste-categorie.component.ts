import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.scss']
})
export class ListeCategorieComponent implements OnInit {
  listeCategories:any=[]
  categorie:any={id:null,titre:""};
  categorieEdit:any={id:null,titre:""};
  sousCategorie:any={id:null,titre:"",categorie:this.categorie};

  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) { 
                this.serv.getListeCategories().subscribe(
                  (data)=>{
                    this.listeCategories=data;
                  },(err)=>{}
      )
    }

  ngOnInit(): void {
  }

  listeSousCategories(titre:string){
    console.log(titre)
    this.local.store("titreCategorie",titre)
    this.route.navigate(["/listeSousCategories"]);
    
  }
  EditerCategorie(idCat){
    this.serv.getCategorieById(idCat).subscribe(
      (data)=>{
        this.categorieEdit=data;
        this.local.store("categorieEdit",this.categorieEdit);
        this.route.navigate(["/editCategorie"]);
      },(err)=>{}
    )
  }
  alerte(idCategorie){
    this.local.store("idCategorie",idCategorie);
    this.route.navigate(["/alerteSuppressionCategorie"]);
  }

}
