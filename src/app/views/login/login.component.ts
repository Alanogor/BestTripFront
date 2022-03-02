import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  credentials={username:'',password:''};
  constructor(private appServ:AppService, private httpClient:HttpClient, private router:Router){}
  login(){
    //this.appServ.authenticate(this.credentials,()=>{this.router.navigateByUrl("/base/users")});
    return false;
  }
}
