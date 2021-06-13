import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AjouterLivreurComponent } from './livreurs/ajouter-livreur/ajouter-livreur.component';
import { ListeLivreursComponent } from './liste-livreurs/liste-livreurs.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { EditerLivreurComponent } from './livreurs/editer-livreur/editer-livreur.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { AjouterProduitComponent } from './produits/ajouter-produit/ajouter-produit.component';
import { EditerProduitComponent } from './produits/editer-produit/editer-produit.component';
import { ListeCategorieComponent } from './categories/categorie/liste-categorie/liste-categorie.component';
import { AjouterCategorieComponent } from './categories/categorie/ajouter-categorie/ajouter-categorie.component';
import { ListeSousCategorieComponent } from './categories/sousCategorie/liste-sous-categorie/liste-sous-categorie.component';
import { AjouterSousCategorieComponent } from './categories/sousCategorie/ajouter-sous-categorie/ajouter-sous-categorie.component';
import { EditerCategorieComponent } from './categories/categorie/editer-categorie/editer-categorie.component';
import { EditerSousCategorieComponent } from './categories/sousCategorie/editer-sous-categorie/editer-sous-categorie.component';
import { ListeClientsComponent } from './clients/liste-clients/liste-clients.component';
import { ListeCommandeComponent } from './commandes/liste-commande/liste-commande.component';
import { ArchiveCommandeComponent } from './commandes/archive-commande/archive-commande.component';
import { AlerteDeSuppressionComponent } from './alerte/alerte-de-suppression/alerte-de-suppression.component';
import { AlerteDeSuppressionCategorieComponent } from './alerte/alerte-de-suppression-categorie/alerte-de-suppression-categorie.component';
import { AlerteDeSuppressionSousCategorieComponent } from './alerte/alerte-de-suppression-sous-categorie/alerte-de-suppression-sous-categorie.component';
import { AlerteDeSuppressionClientComponent } from './alerte/alerte-de-suppression-client/alerte-de-suppression-client.component';
import { AlerteDeSuppressionLivreurComponent } from './alerte/alerte-de-suppression-livreur/alerte-de-suppression-livreur.component';
import { AffecterCommandeLivreurComponent } from './commandes/affecter-commande-livreur/affecter-commande-livreur.component';
import { ChatClientComponent } from './messages/chat-client/chat-client.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { StatistiqueComponent } from './statistiques/statistique/statistique.component';
import { AlerteAffectationComponent } from './alerte/alerte-affectation/alerte-affectation.component';
import { DetailsCommandeComponent } from './commandes/details-commande/details-commande.component';

const routes: Routes = [
  { path:"login",component:LoginAdminComponent},
  { path:"", component:LayoutsComponent,
  children:[
    { path:'home', component:HomeComponent},
    { path:"listeLivreurs",component:ListeLivreursComponent},
    { path:"ajouterLivreur",component:AjouterLivreurComponent},
    { path:"editLivreur",component:EditerLivreurComponent},
    { path:"listeProduits",component:ListeProduitsComponent},
    { path:"ajouterProduit",component:AjouterProduitComponent},
    { path:"editProduit",component:EditerProduitComponent},
    { path:"listeCategories",component:ListeCategorieComponent},
    { path:"ajouterCategorie",component:AjouterCategorieComponent},
    { path:"listeSousCategories",component:ListeSousCategorieComponent},
    { path:"ajoutersousCategorie",component:AjouterSousCategorieComponent},
    { path:"editCategorie",component:EditerCategorieComponent},
    { path:"editSousCategorie",component:EditerSousCategorieComponent},
    { path:"listeClients",component:ListeClientsComponent},
    { path:"listeCommandes",component:ListeCommandeComponent},
    { path:"archiveCommande",component:ArchiveCommandeComponent},
    { path:"alerte",component:AlerteDeSuppressionComponent},//produit
    { path:"alerteSuppressionCategorie",component:AlerteDeSuppressionCategorieComponent},
    { path:"alerteSuppressionSousCategorie",component:AlerteDeSuppressionSousCategorieComponent},
    { path:"alerteSuppressionClient",component:AlerteDeSuppressionClientComponent},
    { path:"alerteSuppressionLivreur",component:AlerteDeSuppressionLivreurComponent},
    { path:"affecterCommande",component:AffecterCommandeLivreurComponent},
    { path:"chatClient",component:ChatClientComponent},
    { path:"profil",component:ProfileComponent},
    { path:"statistique",component:StatistiqueComponent},
    { path:"alerteMalAffectation",component:AlerteAffectationComponent},
    { path:"detailsCommande",component:DetailsCommandeComponent},


    
    
    
    
    

    
    
    
    

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
