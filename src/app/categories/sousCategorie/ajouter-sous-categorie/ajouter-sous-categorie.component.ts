import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-ajouter-sous-categorie',
  templateUrl: './ajouter-sous-categorie.component.html',
  styleUrls: ['./ajouter-sous-categorie.component.scss']
})
export class AjouterSousCategorieComponent implements OnInit {
  listeCategorie:any=[]
  categorie:any={id:null,titre:""};
  sousCategorie:any={id:null,titre:"",categorie:this.categorie};
  titreCategorie:string;

  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) {
                this.retrieve();
                this.serv.getCategorieByTitre(this.titreCategorie).subscribe(
                  (data)=>{
                    this.sousCategorie.categorie=data
                  },(err)=>{}
                )
              }

  ngOnInit(): void {
  }
  retrieve(){
    this.titreCategorie=this.local.retrieve("titreCategorie");
  }

  ajouterSousCategorie(){
   this.serv.addSousCategorie(this.sousCategorie).subscribe(
    (data)=>{
      this.route.navigate(["/listeSousCategories"])
    },(err)=>{}
  )

  }

}
