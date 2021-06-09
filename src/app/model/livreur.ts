export class Livreur {
    public id:number;
    public nom:string;
    public prenom:string;
    public imageUrl:string;
    public secteur:string;


    constructor(){}

    public set $secteur(x:string){
        this.$secteur=x;
    }

    public set $id(x:number){
        this.$id=x;
    }
    public set $nom(x:string){
        this.$nom=x;
    }
    public set $prenom(x:string){
        this.$prenom=x;
    }
    public set $imageUrl(x:string){
        this.$imageUrl=x;
    }
}
