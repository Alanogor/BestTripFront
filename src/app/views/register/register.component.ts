import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  utilisateurs: any; 
  utilisateur: User = new User();
  constructor(private appServ:AppService, private utilisateurService:UserService,private router:Router) { } 
  
  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.utilisateurService.findAll().subscribe(data => {this.utilisateurs = data;}); // data : objet qui stocke les données des utilisateurs
  }

  save(){
    this.utilisateurService.save(this.utilisateur).subscribe(()=>{
        this.findAll();  
        this.utilisateur = new User();        
        this.router.navigate(['/login']);
    })
  }
}
