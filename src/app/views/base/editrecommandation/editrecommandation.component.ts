import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recommandation } from '../../../models/recommandation';
import { RecommandationService } from '../../../services/recommandation.service';

@Component({
  selector: 'app-editrecommandation',
  templateUrl: './editrecommandation.component.html',
  
})
export class EditrecommandationComponent implements OnInit {

  editForm:FormGroup;
  recommandation:Recommandation=new Recommandation();
  

  constructor(private recommandationService:RecommandationService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let recommandationId=localStorage.getItem("recommandationId");
    if (!recommandationId){
      alert("Invalid Action!!");
      this.router.navigate(["/base/recommmandation"]);
      return;
    }
    this.editForm=this.formBuilder.group({
      idRecommandation:[],
      titreRecommandation:[''],
      descriptionRecommandation:[''],
      typeRecommandation:[''],
      paysRecommandation:[''],
      prixRecommandation:[''],
      ratingRecommandation:['']
    });
    this.recommandationService.findOne(+recommandationId).subscribe(data=>{this.editForm.setValue(data)});
  }

  update(){
    var varJson=JSON.stringify(this.editForm.value);
    this.recommandationService.update(varJson).subscribe(()=>this.router.navigate(["/base/recommandation"]));
  }

}
