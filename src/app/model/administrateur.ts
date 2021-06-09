export class Administrateur {
    public id:number;
    public nom:string;
    public prenom:string;
    public email:string;
    public motDePasse:string;
    public adresse:string;
    public imageUrl:string;
    public numTelephone:number;
    
    constructor(){}

    public set $numTelephone(x:number){
        this.$numTelephone=x;
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
    public set $email(x:string){
        this.$email=x;
    }
    public set $motDePasse(x:string){
        this.$motDePasse=x;
    }
    
    public set $adresse(x:string){
        this.$adresse=x;
    }
    public set $imageUrl(x:string){
        this.$imageUrl=x;
    }
}
