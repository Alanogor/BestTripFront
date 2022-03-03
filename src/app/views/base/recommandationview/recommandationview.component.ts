import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { CommentaireRecommandation } from '../../../models/commentaire-recommandation';
import { Recommandation } from '../../../models/recommandation';
import { CommentaireRecommandationService } from '../../../services/commentaire-recommandation.service';
import { RecommandationService } from '../../../services/recommandation.service';

@Component({
  selector: 'app-recommandationview',
  templateUrl: './recommandationview.component.html',
})
export class RecommandationviewComponent implements OnInit {
  recommandation=new Recommandation();
  commentaireRecommandation=new CommentaireRecommandation();

  constructor(private formBuilder:FormBuilder,private appService : AppService,private commentairerecommandationService:CommentaireRecommandationService,private router:Router,private recommandationService:RecommandationService) { }

  ngOnInit(): void {
    let idRecommandation=localStorage.getItem("idRecommandation");
    if (!idRecommandation){
      alert("Invalid Action!!");
      this.router.navigate(["/base/recommandation"]);
      return;
    }
    this.recommandationService.findOne(+idRecommandation).subscribe(data=>{this.recommandation=data});
    console.log("recommandation="+this.recommandation);
    this.commentaireRecommandation.recommandation=this.recommandation;
  }

  public save(){
    console.log("entrer")
    this.commentairerecommandationService.save(this.commentaireRecommandation).subscribe(()=>{
      console.log("recommandation="+this.recommandation);
      console.log(this.commentaireRecommandation)
      this.commentaireRecommandation=new CommentaireRecommandation();
      this.commentaireRecommandation.recommandation=this.recommandation;
      localStorage.removeItem("idRecommandation");
      localStorage.setItem("idRecommandation",this.recommandation.idRecommandation.toString());
      this.router.navigate(['/base/recommandationview',this.recommandation.idRecommandation])
    });
  }

}
