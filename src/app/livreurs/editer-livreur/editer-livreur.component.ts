import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Livreur } from 'src/app/model/Livreur';
@Component({
  selector: 'app-editer-livreur',
  templateUrl: './editer-livreur.component.html',
  styleUrls: ['./editer-livreur.component.scss']
})
export class EditerLivreurComponent implements OnInit {
  livreurEdit:any={id:null,nom:"",prenom:"",image_id:null}
 
  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) {
                this.retrieve();
                console.log(this.livreurEdit)
               }

  ngOnInit(): void {
  }
  retrieve(){
    this.livreurEdit=this.local.retrieve("livreurEdit");
  }
  editerLivreur(){
    this.serv.addLivreur(this.livreurEdit).subscribe(
      (data)=>{
        this.route.navigate(["/listeLivreurs"])
      },(err)=>{}
    )
    
  }

}
