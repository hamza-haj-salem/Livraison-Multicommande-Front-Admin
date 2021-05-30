import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-editer-categorie',
  templateUrl: './editer-categorie.component.html',
  styleUrls: ['./editer-categorie.component.scss']
})
export class EditerCategorieComponent implements OnInit {
  categorieEdit:any={id:null,titre:""}
  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) {
                this.retrieve();
              }

  ngOnInit(): void {
  }
  retrieve(){
    this.categorieEdit=this.local.retrieve("categorieEdit");
  }
  editerCategorie(){
    this.serv.addCategorie(this.categorieEdit).subscribe(
      (data)=>{
        this.route.navigate(["/listeCategories"])
      },(err)=>{}
    )
    
  }

}
