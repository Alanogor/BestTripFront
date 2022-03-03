import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { Recommandation } from '../../../models/recommandation';
import { RecommandationService } from '../../../services/recommandation.service';

@Component({
  selector: 'app-ajouter-recommandation',
  templateUrl: './ajouter-recommandation.component.html',
})
export class AjouterRecommandationComponent implements OnInit {

       
  recommandation: Recommandation = new Recommandation(); 
  
  constructor(private appService : AppService,private recommandationService:RecommandationService,private router:Router) { } 
  ngOnInit(): void {
  }
  
  save(){
    this.recommandationService.save(this.recommandation).subscribe(()=>{
        this.router.navigate(['/base/recommandation']);
    })
  }
  
}
