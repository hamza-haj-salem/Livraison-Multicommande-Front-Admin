import { Produit } from './produit';
import { Commande } from './commande';

export class LigneCommande {
    public idLigneCommande:number;
    public produit:Produit;
    public commande:Commande;
    public quantite:number;

    constructor(){}

    public set $idLigneCommande(x:number){
        this.$idLigneCommande=x;
    }
    public set $produit(x:Produit){
        this.$produit=x;
    }
    public set $commande(x:Commande){
        this.$commande=x;
    }
    public set $quantite(x:number){
        this.$quantite=x;
    }
}
