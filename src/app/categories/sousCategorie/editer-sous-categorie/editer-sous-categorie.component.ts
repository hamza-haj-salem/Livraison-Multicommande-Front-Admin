import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-editer-sous-categorie',
  templateUrl: './editer-sous-categorie.component.html',
  styleUrls: ['./editer-sous-categorie.component.scss']
})
export class EditerSousCategorieComponent implements OnInit {
  categorieEdit:any={id:null,titre:""}
  sousCategorieEdit:any={id:null,titre:"",categorieEdit:this.categorieEdit};

  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) { 
                
                this.retrieveSousCat();
                this.retrieveCat();
                console.log("ml const fl edit cat"+this.sousCategorieEdit.categorieEdit.titre);
                console.log("ml const fl edit sousCat"+this.sousCategorieEdit.titre);
                
              }

  ngOnInit(): void {
  }
  
  retrieveSousCat(){
    this.sousCategorieEdit=this.local.retrieve("sousCategorieEdit");
  }
  retrieveCat(){
    this.sousCategorieEdit.categorieEdit=this.local.retrieve("categorieEdit");
  }
  editerSousCategorie(){
    this.serv.addSousCategorie(this.sousCategorieEdit).subscribe(
      (data)=>{
        this.route.navigate(["/listeSousCategories"])
      },(err)=>{}
    )
  }

}
