import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experience } from '../../../models/experience';
import { ExperienceService } from '../../../services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.scss']
})
export class EditExperienceComponent implements OnInit {
  editForm:FormGroup;
  experience:Experience=new Experience();

  constructor(private experienceService:ExperienceService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let idExperience=localStorage.getItem("idExperience");
    if (!idExperience){
      alert("Invalid Action!!");
      this.router.navigate(["/base/experiences"]);
      return;
    }
    this.editForm=this.formBuilder.group({
      idExperience:[],
      titreExperience:['',Validators.required],
      descriptionExperience:['',Validators.required],
      ratingExperience:['',Validators.required],
      typeExperience:['',Validators.required],
      prixExperience:[''],
    });
    this.experienceService.findOne(+idExperience).subscribe(data=>{this.editForm.setValue(data)});
  }

  updateExperience(){
    var varJson=JSON.stringify(this.editForm.value);
    this.experienceService.update(varJson).subscribe(()=>this.router.navigate(["/base/experiences"]));
  }
}
