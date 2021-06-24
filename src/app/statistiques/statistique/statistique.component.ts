import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
listeTopProdVendue: any = []
  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,) {
      this.serv.topProdVendue().subscribe(
        (data)=>{
          this.listeTopProdVendue=data;
        },(err)=>{}
      )
     }

  ngOnInit(): void {
  }

}
