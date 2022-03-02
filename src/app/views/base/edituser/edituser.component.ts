import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../../../models/role';
import { User } from '../../../models/user';
import { RoleService } from '../../../services/role.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
})
export class EdituserComponent implements OnInit {
  editForm:FormGroup;
  utilisateur:User=new User();
  roles:Role[]

  constructor(private utilisateurService:UserService,private router:Router,private formBuilder:FormBuilder,private roleServ:RoleService) { }

  ngOnInit(): void {
    let userId=localStorage.getItem("userId");
    if (!userId){
      alert("Invalid Action!!");
      this.router.navigate(["/base/forms"]);
      return;
    }
    this.editForm=this.formBuilder.group({
      idUtilisateur:[],
      nomUtilisateur:['',Validators.required],
      prenomUtilisateur:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      enabled:[''],
      roles:['']
    });
    this.utilisateurService.findOne(+userId).subscribe(data=>{this.editForm.setValue(data)});
    this.loadRole();
  }

  updateUtilisateur(){
    var varJson=JSON.stringify(this.editForm.value);
    this.utilisateurService.update(varJson).subscribe(()=>this.router.navigate(["/base/users"]));
  }

  loadRole(){
    this.roleServ.findAll().subscribe(data=>this.roles=data);
  }
}
