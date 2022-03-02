import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { RoleService } from '../service/role.service';
import { UtilisateurService } from '../service/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {
  utilisateurs!:any[]; //le "!" evite l'initialisation 
  roles:any;
  utilisateur:Utilisateur=new Utilisateur();

  constructor(private utilisateurService:UtilisateurService,private roleService:RoleService) { } //injection de la dependance UtilisateurService

  ngOnInit(): void {
    this.findAll();
    this.loadRole();
  }

  public findAll(){
    this.utilisateurService.findAll().subscribe(data => {this.utilisateurs=data}); //data: objet qui stocke les données des utilisateurs
  }

  public loadRole(){
    this.roleService.findAll().subscribe(data=>this.roles=data);
  }

  public deleteUtilisateur(id:number){
    this.utilisateurService.deleteUser(id).subscribe(()=>{this.findAll()}); //() => {this.findAll()}: () pas de parametre de la fonction
  }

  public save(){
    // on utilise la fonction save()
    //On MAJ la liste des utilisateur dans la page web
    //vider le formulaire
    this.utilisateurService.saveUser(this.utilisateur).subscribe(()=>{
      this.findAll(); //mise a jour des utilisateur
      this.utilisateur=new Utilisateur(); //vide le formulaire
    });
  }
}
