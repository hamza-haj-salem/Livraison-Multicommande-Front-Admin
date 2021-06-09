import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { ChatClientComponent } from 'src/app/messages/chat-client/chat-client.component';
import { Administrateur } from 'src/app/model/administrateur';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  admin: Administrateur;
  notificationMessage: number;
  notificationCommande: number;
  listeMessageByUtilisateurNotification1: any = [];
  listeUtlisateurEnComm: any = [];
  dernierMessage: string = "";

  notificationCommandeBoolean: boolean = true;
  listeCommandes: any = [];
  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,) {

    this.admin = this.local.retrieve("admin");
    setInterval(() => {
      this.notificationMessage = this.serv.getNotMsg();
    }, 2000);
    this.serv.getListUtilisateurEnCommunication(this.admin.id).subscribe(
      (data) => {
        this.listeUtlisateurEnComm = data;
        this.listeUtlisateurEnComm.forEach(u => {
          console.log(u);
          this.serv.getListMessageEnvByUtilisateur(u.id, this.admin.id).subscribe(
            (data) => {
              this.listeMessageByUtilisateurNotification1 = data;
              this.dernierMessage = this.listeMessageByUtilisateurNotification1[0];
            }, (err) => { }
          )

        });
      }, (err) => {
        console.log(err);
      }
    )

    this.serv.getListeCommandes().subscribe(
      (data) => {
        this.listeCommandes = data;
        this.notificationCommande = this.listeCommandes.length;
      }, (err) => { }
    )

  }


  ngOnInit(): void {
  }


  desactiverNotMsg() {
    //this.serv.setNotMsg(0);
    console.log(ChatClientComponent.dernierMessage);
    ChatClientComponent.dernierMessage=ChatClientComponent.listeMessageByUtilisateur[0];
  }

  desactiverNotCom() {
    this.notificationCommandeBoolean = false;
  }

}
