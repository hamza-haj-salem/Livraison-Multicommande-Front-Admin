import { Component, OnInit } from '@angular/core';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { Livreur } from '../model/Livreur';

@Component({
  selector: 'app-boite-messagerie',
  templateUrl: './boite-messagerie.component.html',
  styleUrls: ['./boite-messagerie.component.scss']
})
export class BoiteMessagerieComponent implements OnInit {
  l=new Livreur();
  message:any=[]
  message2:any=[]

  constructor( private local:LocalStorageService,
                ) {
                  this.retrieve();
                 }

  ngOnInit(): void {
  }
  retrieve(){
    this.l = this.local.retrieve('Livreur');
    console.log("ml meth retrieve fl boite mess "+this.l.nom);
  }
  send(){
    this.message2=this.message2+" " +this.message;
    this.message="";
  }

}
