import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
  imageList: any[];
  rowIndexArray: any[];

  listeProduits: any = []
  categorie: any = { id: null, titre: "" };
  sousCategorie: any = { id: null, titre: "", categorie: this.categorie };
  produitEdit: any = { id: null, titre: "", description: "", imageUrl: "", nature: "", prix: null, sousCategorie: this.sousCategorie };
  produitEdit2:Produit;

  constructor(private serv: LivraisonMulticommandeService,
              private local: LocalStorageService,
              private route: Router,) 
              {
                this.serv.getListeProduits().subscribe(
                  (data) => {
                    this.listeProduits = data;
                    //console.log(this.listeProduits[1].imageUrl)
                  }, (err) => { }
                )
  }

  ngOnInit(): void {
    
  }
  
  EditerProduit(idProd) {
    this.serv.getProduitById(idProd).subscribe(
      (data) => {
        this.produitEdit = data;
        console.log("liste" + this.produitEdit.imageUrl)
        this.local.store("produitEdit", this.produitEdit);
        console.log(this.produitEdit.imageUrl)
        console.log("liste" + this.produitEdit)
        this.route.navigate(["/editProduit"]);
      }, (err) => { }
    )
  }
  alerte(idProduit){
    this.local.store("idProduit",idProduit);
    this.route.navigate(["/alerte"]);
  }

}
