export class Livreur {
    public id:number;
    public nom:string;
    public prenom:string;
    public imageUrlLivreur:string;

    constructor(){}

    public set $id(x:number){
        this.$id=x;
    }
    public set $nom(x:string){
        this.$nom=x;
    }
    public set $prenom(x:string){
        this.$prenom=x;
    }
    public set $imageUrlLivreur(x:string){
        this.$imageUrlLivreur=x;
    }
}
