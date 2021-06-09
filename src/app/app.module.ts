import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeLivreursComponent } from './liste-livreurs/liste-livreurs.component';
import { BoiteMessagerieComponent } from './boite-messagerie/boite-messagerie.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts/layouts.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AjouterLivreurComponent } from './livreurs/ajouter-livreur/ajouter-livreur.component';
import { EditerLivreurComponent } from './livreurs/editer-livreur/editer-livreur.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { AjouterProduitComponent } from './produits/ajouter-produit/ajouter-produit.component';
import { EditerProduitComponent } from './produits/editer-produit/editer-produit.component';
import { ListeCategorieComponent } from './categories/categorie/liste-categorie/liste-categorie.component';
import { EditerCategorieComponent } from './categories/categorie/editer-categorie/editer-categorie.component';
import { AjouterCategorieComponent } from './categories/categorie/ajouter-categorie/ajouter-categorie.component';
import { ListeSousCategorieComponent } from './categories/sousCategorie/liste-sous-categorie/liste-sous-categorie.component';
import { EditerSousCategorieComponent } from './categories/sousCategorie/editer-sous-categorie/editer-sous-categorie.component';
import { AjouterSousCategorieComponent } from './categories/sousCategorie/ajouter-sous-categorie/ajouter-sous-categorie.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AlerteDeSuppressionComponent } from './alerte/alerte-de-suppression/alerte-de-suppression.component';
import { ListeClientsComponent } from './clients/liste-clients/liste-clients.component';
import { ListeCommandeComponent } from './commandes/liste-commande/liste-commande.component'; 
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from "../environments/environment";
import { ArchiveCommandeComponent } from './commandes/archive-commande/archive-commande.component';
import { AlerteDeSuppressionCategorieComponent } from './alerte/alerte-de-suppression-categorie/alerte-de-suppression-categorie.component';
import { AlerteDeSuppressionSousCategorieComponent } from './alerte/alerte-de-suppression-sous-categorie/alerte-de-suppression-sous-categorie.component';
import { AlerteDeSuppressionClientComponent } from './alerte/alerte-de-suppression-client/alerte-de-suppression-client.component';
import { AlerteDeSuppressionLivreurComponent } from './alerte/alerte-de-suppression-livreur/alerte-de-suppression-livreur.component';
import { AffecterCommandeLivreurComponent } from './commandes/affecter-commande-livreur/affecter-commande-livreur.component';
import { ChatClientComponent } from './messages/chat-client/chat-client.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { StatistiqueComponent } from './statistiques/statistique/statistique.component';
import { AlerteAffectationComponent } from './alerte/alerte-affectation/alerte-affectation.component'; //à utiliser dans fire pour le stockage des images 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginAdminComponent,
    ListeLivreursComponent,
    BoiteMessagerieComponent,
    LayoutsComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    AjouterLivreurComponent,
    EditerLivreurComponent,
    ListeProduitsComponent,
    AjouterProduitComponent,
    EditerProduitComponent,
    ListeCategorieComponent,
    EditerCategorieComponent,
    AjouterCategorieComponent,
    ListeSousCategorieComponent,
    EditerSousCategorieComponent,
    AjouterSousCategorieComponent,
    AlerteDeSuppressionComponent,
    ListeClientsComponent,
    ListeCommandeComponent,
    ArchiveCommandeComponent,
    AlerteDeSuppressionCategorieComponent,
    AlerteDeSuppressionSousCategorieComponent,
    AlerteDeSuppressionClientComponent,
    AlerteDeSuppressionLivreurComponent,
    AffecterCommandeLivreurComponent,
    ChatClientComponent,
    ProfileComponent,
    StatistiqueComponent,
    AlerteAffectationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    ConfirmationPopoverModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
