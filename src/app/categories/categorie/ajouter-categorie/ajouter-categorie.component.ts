import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.scss']
})
export class AjouterCategorieComponent implements OnInit {
  categorie:any={id:null,titre:""};
  
  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) {
                
               }

  ngOnInit(): void {
  }
  ajouterCategori(){
    this.serv.addCategorie(this.categorie).subscribe(
      (data)=>{
        this.route.navigate(["/listeCategories"])
      },(err)=>{}
    )
  }

}
