import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private appServ:AppService,private httpClient:HttpClient,private router:Router){}

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(){
    this.httpClient.post("http://localhost:8080/logout","").subscribe(()=>{
      //this.appServ.authenticated=false;
      //this.appServ.isAdmin=false;
      //this.appServ.isUser=false;
      this.router.navigateByUrl("/login")
    })
  }
}
