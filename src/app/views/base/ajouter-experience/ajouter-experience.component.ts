import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from '../../../models/experience';
import { ExperienceService } from '../../../services/experience.service';

@Component({
  selector: 'app-ajouter-experience',
  templateUrl: './ajouter-experience.component.html',
  styleUrls: ['./ajouter-experience.component.scss']
})
export class AjouterExperienceComponent implements OnInit {
  experience=new Experience();

  constructor(private experienceService:ExperienceService,private router:Router) { }

  ngOnInit(): void {
  }

  public save(){
    this.experienceService.save(this.experience).subscribe(()=>{
      this.router.navigate(["/base/experiences"]);
    })
  }
}
