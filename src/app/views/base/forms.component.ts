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

  deleteUser(id:number){
    console.log("id component"+id);
    this.utilisateurService.delete(id).subscribe(()=>{this.findAll()})  
  }

  save(){
    // On utilise la fonction save
    // MAJ de la liste des utilisateurs dans la page web
    // Vider le formulaire  
    this.utilisateur.roles = this.roles.libelle.user;
    this.utilisateur.newsLetter = true;
    this.utilisateurService.save(this.utilisateur).subscribe(()=>{
        this.findAll();  // MAJ de la liste des utilisateurs
        this.utilisateur = new User(); // Vider le formulaire    
    })
  }


    })
  }

  editUser(user:User){
    console.log(user);
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
