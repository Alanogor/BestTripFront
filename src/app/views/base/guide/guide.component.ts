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
  selectedFiles?:FileList; //selection de plrs fichiers
  currentFileUpload:File; //selctionner 1 fichier a partir dune liste de fichier au dessus
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
  save(){
    this.guideService.save(this.guide).subscribe(()=>{
        this.findAll();  
        this.guide = new Guide(); 
    })
   
  }

  selectFile(event:any){
    this.selectedFiles = event.target.files; //donner valeur des fichiers selctinee a la variable files
  }

  /*save(){
    this.currentFileUpload = this.selectedFiles?.item(0) as File; //valeur de l'image selectionee
    this.guideService.save(this.currentFileUpload,this.guide).subscribe(
      () => {this.findAll(); this.guide = new Guide(); this.selectedFiles = undefined;} //vider formulaire et nput de type files et refresh
    )
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
