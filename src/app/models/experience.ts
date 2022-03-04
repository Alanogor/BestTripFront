import { Byte } from "@angular/compiler/src/util";
import { CommentaireExperience } from "./commentaire-experience";

export class Experience {
    idExperience!:number;
    titreExperience!:string;
    descriptionExperience!:string;
    ratingExperience!:number;
    typeExperience!:string;
    prixExperience!:number;
    mediasExperience!:File;
    comExperience!:CommentaireExperience[];
}
