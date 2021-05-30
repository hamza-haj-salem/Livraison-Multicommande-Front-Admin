import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-alerte-de-suppression-client',
  templateUrl: './alerte-de-suppression-client.component.html',
  styleUrls: ['./alerte-de-suppression-client.component.scss']
})
export class AlerteDeSuppressionClientComponent implements OnInit {
  idClient: number;
  constructor(private serv: LivraisonMulticommandeService,
              private local: LocalStorageService,
              private route: Router,) { 
                this.getIdClientASupprimee();
              }

  ngOnInit(): void {
  }

  getIdClientASupprimee() {
    this.idClient = this.local.retrieve("idClient")
  }
  SupprimerClient(idClient) {
    console.log(this.idClient)
    this.serv.deleteClientById(idClient).subscribe(
      (data) => {
        this.route.navigate(["/listeClients"]);
        
      }, (err) => { }
    )
  }
  annulerSuppresiion() {
    this.route.navigate(["/listeClients"]);
  }

}
