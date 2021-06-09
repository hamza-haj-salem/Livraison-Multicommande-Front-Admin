import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { LivraisonMulticommandeService } from 'src/app/livraison-multicommande.service';
import { Administrateur } from 'src/app/model/administrateur';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  admin: any = Administrateur;
  adminEdit: any = Administrateur;
  listeCommandes: any = [];


  selectedImage: any = null;
  formTemplate = new FormGroup({
    email: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
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
    var filePath = `photoProfilAdmin/${this.selectedImage.name}`;
    console.log(filePath);
    this.task = this.storage.upload(filePath, this.selectedImage);
    this.progressValue = this.task.percentageChanges();
    (await this.task).ref.getDownloadURL().then(url => {
      this.downloadableURL = url;
      console.log(this.downloadableURL);


      // à la place de la fct register()
      console.log(this.adminEdit);
      this.adminEdit = Object.assign({}, this.formTemplate.value);
      this.adminEdit.imageUrl = this.downloadableURL;
      this.adminEdit.id = this.admin.id;
      this.adminEdit.motDePasse = this.admin.motDePasse;
      this.serv.updateAdmin(this.adminEdit).subscribe(
        (data) => {
          this.route.navigate(["/login"]);
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
      email: '',
      motDePasse: '',
      nom: '',
      prenom: '',
      imageUrl: '',


    });
    this.imgSrc = 'assets/menu/imageuploadplaceholder.jpeg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }




  constructor(private serv: LivraisonMulticommandeService,
    private local: LocalStorageService,
    private route: Router,
    private storage: AngularFireStorage,) {
    this.admin = this.local.retrieve("admin");
    console.log(this.admin);
    this.serv.getListeCommandes().subscribe(
      (data) => {
        this.listeCommandes = data;
      }, (err) => { }
    )
  }

  ngOnInit(): void {
  }

}
