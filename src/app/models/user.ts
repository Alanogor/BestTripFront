import { Role } from "./role";

export class User {
    idUser!:number;
    nom!:string;
    prenom!:string
    username!:string;
    password!:string;
    email!:string;
    newletter!:boolean;
    roles!:Role[];
}
