import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';

@Component({
  selector: 'app-editer-produit',
  templateUrl: './editer-produit.component.html',
  styleUrls: ['./editer-produit.component.scss']
})
export class EditerProduitComponent implements OnInit {
  categorie: any = { id: null, titre: "" };
  sousCategorie: any = { id: null, titre: "", categorie: this.categorie };
  produitEdit: any = { idProduit: null, titre: "", description: "", imageUrl: "", nature: "", prix: null, sousCategorie: this.sousCategorie };
  listeSousCategorie: any = []
  /* EDIT AVEC IMAGE*/
  selectedImage: any = null;
  imgSrc: string;

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = this.produitEdit.imageUrl;
      this.selectedImage = null;
    }
  }



  formTemplate = new FormGroup({
    imageUrl: new FormControl('', Validators.required),
    titre: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    nature: new FormControl('', Validators.required),
    prix: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    sousCategorie: new FormControl('', Validators.required),

  })

  task: AngularFireUploadTask;
  progressValue: Observable<number>;
  downloadableURL: '';

  isSubmitted: boolean;

  async onSubmit(formValue) {
    this.isSubmitted = true;
    var filePath = `Produits/${this.selectedImage.name}`;                  //${this.selectedImage.name}
    console.log(filePath);
    this.task = this.storage.upload(filePath, this.selectedImage);
    this.progressValue = this.task.percentageChanges();
    (await this.task).ref.getDownloadURL().then(url => {
      this.downloadableURL = url;
      console.log(this.downloadableURL);
      this.produitEdit.imageUrl = this.downloadableURL;
      console.log(this.produitEdit.imageUrl);
      console.log(this.produitEdit.sousCategorie.titre)
      this.serv.getSousCategorieByTitre(this.produitEdit.sousCategorie.titre).subscribe(
        (data) => {
          this.produitEdit.sousCategorie = data;

          console.log(this.produitEdit.imageUrl);
          this.serv.addProduit(this.produitEdit).subscribe(
            (data) => {
              this.route.navigate(["/listeProduits"]);
            }, err => { }
          )
        }
      )
    })


  }




  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,
    private storage: AngularFireStorage,) {
    this.retrieve();
    this.imgSrc = this.produitEdit.imageUrl;
    console.log(this.produitEdit.imageUrl);

    this.serv.getListeSousCategories().subscribe(
      (data) => {
        this.listeSousCategorie = data;

      }, (err) => { }
    )
  }

  ngOnInit(): void {
  }
  retrieve() {
    this.produitEdit = this.local.retrieve("produitEdit");
  }
  editerProduit() {
    this.serv.addProduit(this.produitEdit).subscribe(
      (data) => {
        this.route.navigate(["/listeProduits"])
      }, (err) => { }
    )
  }

}
