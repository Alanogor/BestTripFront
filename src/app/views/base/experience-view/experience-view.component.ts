import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router:Router,private formBuilder:FormBuilder,private commentaireExperienceService:CommentaireExperienceService,private experienceService:ExperienceService) {
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
}
