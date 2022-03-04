import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { CommentaireExperience } from '../../../models/commentaire-experience';
import { Experience } from '../../../models/experience';
import { CommentaireExperienceService } from '../../../services/commentaire-experience.service';
import { ExperienceService } from '../../../services/experience.service';

@Component({
  selector: 'app-experience-view',
  templateUrl: './experience-view.component.html',
  styleUrls: ['./experience-view.component.scss']
})
export class ExperienceViewComponent implements OnInit {
  experience=new Experience();
  commentaireExperience=new CommentaireExperience();
  commentaires!:any;

  constructor(private appServ:AppService,private router:Router,private formBuilder:FormBuilder,private commentaireExperienceService:CommentaireExperienceService,private experienceService:ExperienceService) {
  }

  ngOnInit(): void {
    let idExperience=localStorage.getItem("idExperience");
    if (!idExperience){
      alert("Invalid Action!!");
      this.router.navigate(["/base/experiences"]);
      return;
    }
    this.experienceService.findOne(+idExperience).subscribe(data=>{this.experience=data});
    console.log("experience="+this.experience);
    this.commentaireExperience.experience=this.experience;
    console.log("experience:"+this.experience+", idExperience:"+idExperience+"commentaire.experience:"+this.commentaireExperience.experience);
    this.commentaires=this.findAllCommmentaire(+idExperience);
  }

  public save(){
    console.log("entrer")
    this.commentaireExperienceService.save(this.commentaireExperience).subscribe(()=>{
      console.log("experience="+this.experience);
      console.log(this.commentaireExperience)
      this.commentaireExperience=new CommentaireExperience();
      this.commentaireExperience.experience=this.experience;
      localStorage.removeItem("idExperience");
      localStorage.setItem("idExperience",this.experience.idExperience.toString());
      this.router.navigate(['/base/experienceview',this.experience.idExperience])
    });
  }

  findAllCommmentaire(id:number){
    this.commentaireExperienceService.findByCommentaire(id).subscribe(data=>this.commentaires=data);
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
