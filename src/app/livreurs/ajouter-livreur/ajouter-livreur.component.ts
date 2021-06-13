import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
//import { finalize } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Livreur } from 'src/app/model/livreur';

@Component({
  selector: 'app-ajouter-livreur',
  templateUrl: './ajouter-livreur.component.html',
  styleUrls: ['./ajouter-livreur.component.scss']
})
export class AjouterLivreurComponent implements OnInit {
  // firebase image

  livreur2: Livreur;

  selectedImage: any = null;
  formTemplate = new FormGroup({
    imageUrl: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    secteur: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    motDePasse: new FormControl('', Validators.required),
    numTelephone: new FormControl('', Validators.required),
  })
  imgSrc: string;
  isSubmitted: boolean;
  image: any;

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = 'assets/menu/imageuploadplaceholder.jpeg';
      this.selectedImage = null;
    }
  }
  task: AngularFireUploadTask;
  progressValue: Observable<number>;
  downloadableURL: '';

  async onSubmit(formValue) {
    this.isSubmitted = true;
    var filePath = `photoProfilLivreur/${this.selectedImage.name}`;
    console.log(filePath);
    this.task = this.storage.upload(filePath, this.selectedImage);
    this.progressValue = this.task.percentageChanges();
    (await this.task).ref.getDownloadURL().then(url => {
      this.downloadableURL = url;
      console.log(this.downloadableURL);
      //this.local.store("url", this.downloadableURL);
      //localStorage.setItem('url',this.downloadableURL);

      // à la place de la fct ajoutertLivreur()
      this.livreur2 = Object.assign({}, this.formTemplate.value);
      this.livreur2.imageUrl = this.downloadableURL;
      console.log(this.livreur2);
      
      this.serv.addLivreur(this.livreur2).subscribe(
        (data) => {
          this.route.navigate(["/listeLivreurs"])
        }, (err) => { }
      )
      this.serv.ajouterLivreurFb(this.livreur2); 
    })
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrlLivreur: '',
      nom: '',
      prenom: '',
    });
    this.imgSrc = 'assets/menu/imageuploadplaceholder.jpeg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }


  //firebase image






  livreur = new Livreur()
  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,
    private storage: AngularFireStorage,) { }

  ngOnInit(): void {
    this.serv.getImageDetailListLivreur();
    this.resetForm();
  }
  

}
