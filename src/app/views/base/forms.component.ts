import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Utilisateur } from '../../models/utilisateur';
import { RoleService } from '../../services/role.service';
import { UtilisateurService } from '../../services/utilisateur.service';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent implements OnInit{

  utilisateurs: any;  //utilisateurs: Utilisateur[] 
  roles: any;         // roles: Role[]
  utilisateur: Utilisateur = new Utilisateur(); // Utilisateur utilisateur=new Utilisateur() : JAVA
  constructor(private appServ:AppService, private utilisateurService:UtilisateurService,private roleService:RoleService,private router:Router) { } 
  ngOnInit(): void {
    this.findAll();
    this.loadRoles();
  }
  findAll(){
    this.utilisateurService.findAll().subscribe(data => {this.utilisateurs = data;}); // data : objet qui stocke les données des utilisateurs
  }
  loadRoles(){
    this.roleService.findAll().subscribe(data =>{this.roles = data;});
  }

  deleteUtilisateur(id:number){
    this.utilisateurService.delete(id).subscribe(()=>{this.findAll()}) // () => {this.findAll()} 
  }
  save(){
    // On utilise la fonction save
    // MAJ de la liste des utilisateurs dans la page web
    // Vider le formulaire  
    this.utilisateurService.save(this.utilisateur).subscribe(()=>{
        this.findAll();  // MAJ de la liste des utilisateurs
        this.utilisateur = new Utilisateur(); // Vider le formulaire
    })
  }

  public update(id:number){
    this.utilisateurService.findOne(id).subscribe(data=>this.utilisateur=data);
  }

  public editUser(user:Utilisateur){
    //navigation entre forms.Component.ts et editUser.Component.ts
    //1) Creer une variable local
    //2) Stocker cette vatiable dans le localStorage (accepte uniquement du string)
    localStorage.removeItem("userId");
    localStorage.setItem("userId",user.idUtilisateur.toString());
    this.router.navigate(['/base/editUser',user.idUtilisateur]);
  }

  public authenticated(){
    return this.appServ.authenticated;
  }

  public authorities(){
    if(this.appServ.isAdmin==true){
      return true;
    }else{
      return false;
    }
  }
}
