import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  credentials = {username:'',password:''};
  constructor(private appService:AppService, private httpClient:HttpClient, private router:Router){}
  login(){
    this.appService.authenticate(this.credentials,()=>{this.router.navigateByUrl("/base/home")});
    return false;
  }
  register(){
    return this.router.navigateByUrl("/register");
  }

}
