import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Produit } from 'src/app/model/produit';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.scss']
})
export class AjouterProduitComponent implements OnInit {

  produit2: Produit;

  selectedImage: any = null;
  formTemplate = new FormGroup({
    sousCategorie: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    titre: new FormControl('', Validators.required),
    nature: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    prix: new FormControl('', Validators.required),

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
    var filePath = `Produits/${this.selectedImage.name}`;
    console.log(filePath);
    this.task = this.storage.upload(filePath, this.selectedImage);
    this.progressValue = this.task.percentageChanges();
    (await this.task).ref.getDownloadURL().then(url => {
      this.downloadableURL = url;
      console.log(this.downloadableURL);
      //this.local.store("url", this.downloadableURL);
      //localStorage.setItem('url',this.downloadableURL);

      // à la place de la fct ajouterProduit()
      this.produit2 = Object.assign({}, this.formTemplate.value);
      this.sousCategorie.titre = this.produit2.sousCategorie;
      this.serv.getSousCategorieByTitre(this.sousCategorie.titre).subscribe(
        (data) => {
          this.sousCategorie = data;
          this.produit2.sousCategorie = this.sousCategorie;
          this.produit2.imageUrl = this.downloadableURL;
          console.log(this.produit2.imageUrl);
          this.serv.addProduit(this.produit2).subscribe(
            (data) => {
              this.route.navigate(["/listeProduits"]);
              localStorage.clear();
            }, (err) => { }
          )
        }, (err) => { }
      )
    })
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: '',
      sousCategorie: '',
      titre: '',
      nature: '',
      description: '',
      stock: '',
      prix: '',

    });
    this.imgSrc = 'assets/menu/imageuploadplaceholder.jpeg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  listeSousCategorie: any = []
  categorie: any = { id: null, titre: "" };
  sousCategorie: any = { id: null, titre: "", categorie: this.categorie };
  
  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,
    private storage: AngularFireStorage,) {
    this.serv.getListeSousCategories().subscribe(
      (data) => {
        this.listeSousCategorie = data;

      }, (err) => { }
    )
  }

  ngOnInit(): void {
    this.serv.getImageDetailList();
    this.resetForm();
    localStorage.clear();

  }

  /*url: string = "";
  ajouterProduit() {
    //this.formTemplate.value;
    this.produit2 = Object.assign({}, this.formTemplate.value);
    //console.log(this.produit2)
    this.sousCategorie.titre = this.produit2.sousCategorie;
    //console.log("sc"+this.formTemplate.value)
    this.serv.getSousCategorieByTitre(this.sousCategorie.titre).subscribe(
      (data) => {
        this.sousCategorie = data;
        this.produit2.sousCategorie = this.sousCategorie;
        //this.produit2.imageUrl= this.formTemplate.value['imageUrl']
        //console.log(this.produit2.imageUrl);
        //console.log(produit2.imageUrl);
        //this.url = localStorage.getItem('url');
        this.url = this.local.retrieve("url");
        console.log(this.url)
        //this.produit2.imageUrl=this.downloadableURL;
        //console.log( this.produit2.imageUrl)
        this.serv.addProduit(this.produit2).subscribe(
          (data) => {
            this.route.navigate(["/listeProduits"]);
            localStorage.clear();
          }, (err) => { }
        )
      }, (err) => { }
    )
  }*/

}
