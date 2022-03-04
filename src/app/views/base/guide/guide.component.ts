import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { Guide } from '../../../models/guide';
import { GuideService } from '../../../services/guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  guides: any;  //utilisateurs: Utilisateur[] 
  guide: Guide = new Guide(); // Utilisateur utilisateur=new Utilisateur() : JAVA
  
  constructor(private guideService:GuideService, private router:Router, private appService:AppService) { } 
  ngOnInit(): void {
    this.findAll();
   
  }
  findAll(){
    this.guideService.findAll().subscribe(data => {this.guides = data;}); 
  }
  

  deleteGuide(id:number){
    this.guideService.delete(id).subscribe(()=>{this.findAll()})  
  }
  /*save(){
    this.guideService.save(this.guide).subscribe(()=>{
        this.findAll();  
        this.guide = new Guide(); 
    })
   
  }*/

  public viewGuide(guide:Guide){
    //navigation entre forms.Component.ts et editUser.Component.ts
    //1) Creer une variable local
    //2) Stocker cette vatiable dans le localStorage (accepte uniquement du string)
    localStorage.removeItem("idGuide");
    localStorage.setItem("idGuide",guide.idGuide.toString());
    this.router.navigate(['/base/viewGuide',guide.idGuide]);
  }

  public ajouterGuide(){
    this.router.navigate(['/base/ajouterGuide']);
  }

  public editGuide(guide:Guide){
    //navigation entre forms.Component.ts et editUser.Component.ts
    //1) Creer une variable local
    //2) Stocker cette vatiable dans le localStorage (accepte uniquement du string)
    localStorage.removeItem("idGuide");
    localStorage.setItem("idGuide",guide.idGuide.toString());
    this.router.navigate(['/base/editGuide',guide.idGuide]);
  }
}
