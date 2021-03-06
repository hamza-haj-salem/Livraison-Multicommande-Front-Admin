import { LigneCommande } from './ligne-commande';
import { Client } from './client';
import { Livreur } from './Livreur';

export class Commande {
    public idCommande:number;
    public adresseLivraison:string;
    public etat:string;
    public dateLivraison:Date;
    public ligneCommande: LigneCommande[];
    public client: Client;
    public livreur: Livreur;

    public prixTotal:number;

    constructor(){}

    public set $prixTotal(x:number){
        this.$prixTotal=x;
    }

    public set $livreur(x:Livreur){
        this.$livreur=x;
    }

    public set $idCommande(x:number){
        this.$idCommande=x;
    }
    public set $adresseLivraison(x:string){
        this.$adresseLivraison=x;
    }
    public set $etat(x:string){
        this.$etat=x;
    }
    public set $dateLivraison(x:Date){
        this.$dateLivraison=x;
    }
    public set $ligneCommande(x:LigneCommande[]){
        this.$ligneCommande=x;
    }
    public set $client(x:Client){
        this.$client=x;
    }
}
