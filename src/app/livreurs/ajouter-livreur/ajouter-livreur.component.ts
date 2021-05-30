import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Livreur } from 'src/app/model/Livreur';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";

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
    imageUrlLivreur: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
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

  onSubmit(formValue) {
    this.isSubmitted = true;
    var filePath = `Livreur/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          formValue['imageUrlLivreur'] = url;
          this.livreur2.imageUrlLivreur = url;
          console.log("img" + this.livreur2.imageUrlLivreur)
          this.serv.insertImageDetailsLivreur(formValue);
          this.resetForm();
        })
      })
    ).subscribe();

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
  ajouterLivreur() {
    this.livreur2 = Object.assign({}, this.formTemplate.value);
    this.serv.addLivreur(this.livreur2).subscribe(
      (data) => {
        this.route.navigate(["/listeLivreurs"])
      }, (err) => { }
    )

  }

}
