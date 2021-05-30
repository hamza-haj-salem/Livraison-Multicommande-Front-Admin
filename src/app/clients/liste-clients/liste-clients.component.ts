import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss']
})
export class ListeClientsComponent implements OnInit {
  listeClients:any=[]

  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) { 
                this.serv.getListeClients().subscribe(
                  (data)=>{
                    this.listeClients=data;
                  },(err)=>{
            
                  }
                )
              }

  ngOnInit(): void {
  }

  alerte(idClient){
    this.local.store("idClient",idClient);
    this.route.navigate(["/alerteSuppressionClient"]);
  }

}
