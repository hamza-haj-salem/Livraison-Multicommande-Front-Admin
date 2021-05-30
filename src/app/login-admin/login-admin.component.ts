import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Administrateur } from 'src/app/model/administrateur';
import { LivraisonMulticommandeService } from '../livraison-multicommande.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  msg = '';
  email: string = "";
  motDePasse: string = "";
  admin:any= Administrateur;
  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,) { }

  ngOnInit(): void {
  }
  cnx() {
    console.log(this.email + "&&" + this.motDePasse);
    this.serv.findAdministrateurByEmail(this.email).subscribe(
      (data) => {
        this.admin = data;
        console.log(this.admin);
        if (this.admin.id != null) {
          this.local.store("admin", this.admin);
          this.route.navigate([""]);
        } else {
          this.route.navigate(["/login"]);
        }
      }, (err) => { console.log(err); }
    )
     //this.route.navigate([""]);
  }

}
