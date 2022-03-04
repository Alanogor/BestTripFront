import { Expression } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Experience } from '../../models/experience';
import { ExperienceService } from '../../services/experience.service';

@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent {
  experiences!:Expression[];
  experience!:Experience;
  constructor(private appServ:AppService,private experienceService:ExperienceService,private router:Router) { }

  ngOnInit(){
    this.findAll();
  }

  public findAll(){
    this.experienceService.findAll().subscribe(data=>this.experiences=data);
  }

  public viewExperience(experience:Experience){
    localStorage.removeItem("idExperience");
    localStorage.setItem("idExperience",experience.idExperience.toString());
    this.router.navigate(['/base/experienceview',experience.idExperience])
  }

  public editExperience(experience:Experience){
    localStorage.removeItem("idExperience");
    localStorage.setItem("idExperience",experience.idExperience.toString());
    this.router.navigate(['/base/editexperience',experience.idExperience])
  }

  public creationExperience(){
    this.router.navigate(['/base/ajouterexperience'])
  }

  public delete(id:number){
    this.experienceService.delete(id).subscribe(()=>
      this.findAll()
    );
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
