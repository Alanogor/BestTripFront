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
  selectedFiles?: FileList;
  currentFileUpload?: File;
  recommandations: any;  

  constructor(private appService : AppService,private recommandationService:RecommandationService,private router:Router) { } 
  ngOnInit(): void {
  }
  findAll(){
    this.recommandationService.findAll().subscribe(data => {this.recommandations = data;}); 
  }
  selectFile(event:any){
    this.selectedFiles = event.target.files;
  }
  save(){
    this.currentFileUpload = this.selectedFiles?.item(0) as File;
    this.recommandationService.save(this.currentFileUpload,this.recommandation).subscribe(
      () => {this.findAll(); this.recommandation = new Recommandation(); this.selectedFiles = undefined;}
    )
    this.router.navigate(['/base/recommandation']);
  }
  /*
  save(){
    this.recommandationService.save(this.recommandation).subscribe(()=>{
        this.router.navigate(['/base/recommandation']);
    })
  }
  */
}
