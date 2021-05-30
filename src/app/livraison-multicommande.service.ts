import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livreur } from './model/Livreur';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LivraisonMulticommandeService {
  notificationMessage: number = 0;
  imageDetailList: AngularFireList<any>;
  imageDetailListLivreur: AngularFireList<any>;
  constructor(private http: HttpClient, private firebase: AngularFireDatabase) {

  }
  setNotMsg(n:number){
    this.notificationMessage=n;
  }
  getNotMsg(){
    return this.notificationMessage;
  }
  //FIREBASE : STOCKAGE DES IMAGES PRODUITS
  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails) {
    this.imageDetailList.push(imageDetails);
  }

  //FIREBASE : STOCKAGE DES IMAGES LIVREUR
  getImageDetailListLivreur() {
    this.imageDetailListLivreur = this.firebase.list('imageDetailsLivreur');
  }

  insertImageDetailsLivreur(imageDetailsLivreur) {
    this.imageDetailListLivreur.push(imageDetailsLivreur);
  }

  
  //LIVREUR 
  getListeLivreurs() {
    return this.http.get('http://localhost:8080/listeLivreur');
  }
  deleteLivreurById(idLiv: number) {
    return this.http.delete('http://localhost:8080/deleteLivreur/' + idLiv);
  }
  addLivreur(l: any) {
    return this.http.post('http://localhost:8080/ajouterLivreur', l);
  }
  getLivreurById(idLiv: number) {
    return this.http.get('http://localhost:8080//livreurById/' + idLiv);
  }


  //MESSAGES = CHAT
  


  //PRODUIT
  getListeProduits() {
    return this.http.get('http://localhost:8080/listeProduits');
  }
  addProduit(p: any) {
    return this.http.post('http://localhost:8080/ajouterProduit', p);
  }
  getProduitById(idProd: number) {
    return this.http.get('http://localhost:8080//ProduitById/' + idProd);
  }
  deleteProduitById(idProd: number) {
    return this.http.delete('http://localhost:8080/deleteProduit/' + idProd);
  }
  //à utiliser dans search
  findProduitBytitreContaining(titreProd: string) {
    return this.http.get('http://localhost:8080//listeProduitsByTitre/' + titreProd);
  }



  //SOUS CATEGORIE
  getListeSousCategories() {
    return this.http.get('http://localhost:8080/listeSousCategorie');
  }
  getSousCategorieByTitre(titre: string) {
    return this.http.get('http://localhost:8080/sousCategorieByTitre/' + titre);
  }
  getSousCategorieById(idSousCat: number) {
    return this.http.get('http://localhost:8080/sousCategorieById/' + idSousCat);
  }
  deleteSousCategorieById(idSousCat: number) {
    return this.http.delete('http://localhost:8080/deleteSousCategorie/' + idSousCat);
  }
  getCategorieByTitreSousCategorie(titre: string) {
    return this.http.get('http://localhost:8080/categorieByTitreSousCategorie/' + titre);
  }
  getCategorieByIdSousCategorie(idSousCat: string) {
    return this.http.get('http://localhost:8080/categorieByIdSousCategorie/' + idSousCat);
  }
  addSousCategorie(s: any) {
    return this.http.post('http://localhost:8080/ajouterSouCategorie', s);
  }


  //CATEGORIE
  getListeCategories() {
    return this.http.get('http://localhost:8080/listeCategorie');
  }
  getCategorieById(idCat: number) {
    return this.http.get('http://localhost:8080//categorieById/' + idCat);
  }
  deleteCategorieById(idCat: number) {
    return this.http.delete('http://localhost:8080/deleteCategorie/' + idCat);
  }
  addCategorie(c: any) {
    return this.http.post('http://localhost:8080/ajouterCategorie', c);
  }
  getListeSousCategorieByTitreCategorie(titre: string) {
    return this.http.get('http://localhost:8080/listesousCategorieByTitreCategorie/' + titre);
  }
  getCategorieByTitre(titreCat: string) {
    return this.http.get('http://localhost:8080//categorieByTitre/' + titreCat);
  }


  //CLIENTS
  getListeClients() {
    return this.http.get('http://localhost:8080/listeClient');
  }
  deleteClientById(idClient: number) {
    return this.http.delete('http://localhost:8080/deleteClient/' + idClient);
  }

  //COMMANDES
  getListeCommandes() {
    return this.http.get('http://localhost:8080/listeCommande');
  }
  ajouterArchiveCommande(c:any){
    return this.http.post('http://localhost:8080/ajouterArchiveCommande',c);
  }
  	// hathi juste pour modifier l etat d'une cmd (à en cours) w9t l'admin yaffectiha pour un livreur
  modifierCommande(c:any){
    return this.http.post('http://localhost:8080/modifierCommande',c);
  }
  //ARCHIVE COMMANDE
  getListeArchiveCommandes() {
    return this.http.get('http://localhost:8080/listeArchiveCommande');
  }
  //MESSAGE
  getListUtilisateurEnCommunication(id:number) {
    return this.http.get('http://localhost:8080/listeUtilisateurEnCommunication/'+id);
  }

  getListMessageEnvByUtilisateur(id:number,idUEnCours:number) {
    return this.http.get('http://localhost:8080/listeMessageByUtilisateur/'+id+'/'+idUEnCours);
  }
  ajouterMessage(m:any){
    return this.http.post('http://localhost:8080/ajouterMessage',m);
  }
 
  //UTILISATEUR
  getUtilisateurById(id:number) {
    return this.http.get('http://localhost:8080/UtilisateurById/'+id);
  }

  //ADMINISTRATEUR : bch nbda ne5dem bl admin mn hna 
  verifierCordonneesAdministrateur(a:any) {
    return this.http.get('http://localhost:8080/verifierCordonneesAdministrateur',a);
  }
  findAdministrateurByEmail(emailAdministrateur: string) {
    return this.http.get('http://localhost:8080/findAdministrateurByEmail/' + emailAdministrateur);
  }
  
}
