import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Livreur } from 'src/app/model/Livreur';
@Component({
  selector: 'app-editer-livreur',
  templateUrl: './editer-livreur.component.html',
  styleUrls: ['./editer-livreur.component.scss']
})
export class EditerLivreurComponent implements OnInit {
  livreurEdit: Livreur;
  nvLivreur = new Livreur();

  selectedImage: any = null;
  formTemplate = new FormGroup({
    imageUrl: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    secteur: new FormControl('', Validators.required),
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
      this.imgSrc = this.livreurEdit.imageUrl;
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

      // à la place de la fct EditerLivreur()
      this.nvLivreur = Object.assign({}, this.formTemplate.value);
      this.nvLivreur.imageUrl = this.downloadableURL;
      this.nvLivreur.id = this.livreurEdit.id;
      console.log(this.nvLivreur);

      this.serv.addLivreur(this.nvLivreur).subscribe(
        (data) => {
          this.route.navigate(["/listeLivreurs"])
        }, (err) => { }
      )
      this.serv.ajouterLivreurFb(this.nvLivreur);
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
      secteur: '',
    });
    this.imgSrc = this.livreurEdit.imageUrl;
    this.selectedImage = null;
    this.isSubmitted = false;
  }


  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,
    private storage: AngularFireStorage,) {

    this.retrieve();
    console.log(this.livreurEdit)
    this.imgSrc = this.livreurEdit.imageUrl;
  }

  ngOnInit(): void {
  }
  retrieve() {
    this.livreurEdit = this.local.retrieve("livreurEdit");
  }
  editerLivreur() {
    this.serv.addLivreur(this.livreurEdit).subscribe(
      (data) => {
        this.route.navigate(["/listeLivreurs"])
      }, (err) => { }
    )

  }

}
