import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../models/experience';
import { ExperienceService } from '../../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  private experiences!:Experience[]
  constructor(private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.findAll().subscribe(data=>this.experiences=data);
  }
}
