import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-archive-commande',
  templateUrl: './archive-commande.component.html',
  styleUrls: ['./archive-commande.component.scss']
})
export class ArchiveCommandeComponent implements OnInit {
  listeArchiveCommandes:any=[]
  constructor(private serv:LivraisonMulticommandeService,
              private local:LocalStorageService,
              private route:Router,) { 
                this.serv.getListeArchiveCommandes().subscribe(
                  (data)=>{
                    this.listeArchiveCommandes=data;
                  },(err)=>{}
                )
              }

  ngOnInit(): void {
  }

}
