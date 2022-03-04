import { Role } from "./role";

export class User {
    idUtilisateur!:number;
    nom!:string;
    prenom!:string
    username!:string;
    password!:string;
    email!:string;
    newsLetter!:boolean;
    roles!:Role[];
}
