import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { User } from '../../models/user';
import { RoleService } from '../../services/role.service';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent implements OnInit{

  utilisateurs: any;  //utilisateurs: Utilisateur[] 
  roles: any;         // roles: Role[]
  utilisateur: User = new User(); // Utilisateur utilisateur=new Utilisateur() : JAVA
  constructor(private appServ:AppService, private utilisateurService:UserService,private roleService:RoleService,private router:Router) { } 
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
        this.utilisateur = new User(); // Vider le formulaire
    })
  }

  public update(id:number){
    this.utilisateurService.findOne(id).subscribe(data=>this.utilisateur=data);
  }

  public editUser(user:User){
    //navigation entre forms.Component.ts et editUser.Component.ts
    //1) Creer une variable local
    //2) Stocker cette vatiable dans le localStorage (accepte uniquement du string)
    localStorage.removeItem("userId");
    localStorage.setItem("userId",user.idUser.toString());
    this.router.navigate(['/base/editUser',user.idUser]);
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
