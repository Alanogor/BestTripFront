import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { Recommandation } from '../../../models/recommandation';
import { RecommandationService } from '../../../services/recommandation.service';

@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
})
export class RecommandationComponent implements OnInit {

  
  recommandations: any;  
       
  recommandation: Recommandation = new Recommandation(); 
  
  constructor(private appService : AppService,private recommandationService:RecommandationService,private router:Router) { } 
  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.recommandationService.findAll().subscribe(data => {this.recommandations = data;}); 
  }
  
  delete(id:number){
    this.recommandationService.delete(id).subscribe(()=>{this.findAll()}) 
  }
  ajouter(){
    this.router.navigate(['/base/ajouterrecommandation']);
  }
  edit(recom:Recommandation){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",recom.idRecommandation.toString());
    this.router.navigate(['/base/editUser',recom.idRecommandation]);// localhost:4200/#/base/editUser/5
  }
  voir(recom:Recommandation){
    localStorage.removeItem("voirId");
    localStorage.setItem("voirId",recom.idRecommandation.toString());
    this.router.navigate(['/base/voirrecommandation',recom.idRecommandation]);

  }
  

}
