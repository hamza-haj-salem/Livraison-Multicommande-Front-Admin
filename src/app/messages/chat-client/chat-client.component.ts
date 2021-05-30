import { getLocaleDateFormat } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { timestamp } from 'rxjs/operators';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Administrateur } from 'src/app/model/administrateur';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss']
})
export class ChatClientComponent implements OnInit {
//@Output() envEvt = new EventEmitter();
  listeUtlisateurEnComm: any = [];
  listeMessageByUtilisateurNotification1: any = [];
  listeMessageByUtilisateurNotification2: any = [];
  listeMessageByUtilisateur: any = [];
  idU: number;// cette vbl contien l id de user qui va former 
  //la partie receptrice de msg
  uEnv: any = { id: null, nom: "", prenom: "", image_id: null };
  uRec: any = { id: null, nom: "", prenom: "", image_id: null };
  message: any = { id: null, contenu: "", dateEnvoi: null, uEnv: this.uEnv, uRec: this.uRec };
  admin: any = Administrateur;
  notificationMessage: number = 0;
  idUtlisateurEnCour: number;
  dernierMessage: any = Message;

  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,) {
    this.admin = this.local.retrieve("admin");
    this.serv.getListUtilisateurEnCommunication(this.admin.id).subscribe(
      (data) => {
        this.listeUtlisateurEnComm = data;
        console.log(this.listeUtlisateurEnComm);
        //this.afficherlisteMessage(this.listeUtlisateurEnComm[0].id);
      }, (err) => {
        console.log(err);
      }
    )

    setInterval(() => {
      this.serv.getListMessageEnvByUtilisateur(this.idU, this.admin.id).subscribe(
        (data) => {
          this.listeMessageByUtilisateur = data;
          console.log(this.dernierMessage);
          console.log(this.listeMessageByUtilisateur[0]);
          if (this.dernierMessage.id != this.listeMessageByUtilisateur[0].id ) {
            this.notificationMessage = 1;
            console.log(this.notificationMessage)
            this.serv.setNotMsg(this.notificationMessage);
          }else if(this.dernierMessage.id == this.listeMessageByUtilisateur[0].id){
            
            this.serv.setNotMsg(0);
            console.log("00")
          }
        }, (err) => {
        }
      )
    }, 2000);
   



  }

  ngOnInit(): void {
   
  }


  afficherlisteMessage(id) {
    this.serv.getListMessageEnvByUtilisateur(id, this.admin.id).subscribe(
      (data) => {
        this.listeMessageByUtilisateur = data;
        this.dernierMessage = this.listeMessageByUtilisateur[0]; //0 5ater jayebhom ml base 
        //mratbin bl date donc a5er msg bcch tkoun l'indice mte3ou 0 
        console.log(this.dernierMessage);
        console.log(this.listeMessageByUtilisateur);
        this.idU = id;
        console.log(this.idU);
        console.log(this.listeMessageByUtilisateur);
      }, (err) => {

      }
    )
  }
  envoyerMessage() {
    this.serv.getUtilisateurById(this.idU).subscribe(
      (data) => {
        this.uRec = data;
        this.message.uRec = this.uRec;
      }, (err) => { }
    )                       // hna admin.id ne5dem biha f tab utilisateur
    // cad admin howa bidou utilisateur
    this.serv.getUtilisateurById(this.admin.id).subscribe(
      (data) => {
        this.uEnv = data;
        this.message.uEnv = this.uEnv;
      }, (err) => { }
    )
    this.message.dateEnvoi = Date.now();
    console.log(this.message);
    if (this.message.contenu != "") {
      this.serv.ajouterMessage(this.message).subscribe(
        (data) => { }, (err) => { }
      )
    }
    this.message.contenu = "";
    this.afficherlisteMessage(this.idU);




  }


}
