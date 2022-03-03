import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guide } from '../../../models/guide';
import { GuideService } from '../../../services/guide.service';

@Component({
  selector: 'app-edit-guide',
  templateUrl: './edit-guide.component.html',
  styleUrls: ['./edit-guide.component.scss']
})
export class EditGuideComponent implements OnInit {

  editForm:FormGroup;
  guide:Guide=new Guide();

  constructor(private guideService:GuideService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let idGuide=localStorage.getItem("idGuide");
    if (!idGuide){
      alert("Invalid Action!!");
      this.router.navigate(["/base/guides"]); 
      return;
    }
    this.editForm=this.formBuilder.group({
      idGuide:[],
      descriptionGuide:['',Validators.required],
      paysGuide:['',Validators.required],
      villeGuide:['',Validators.required],
      prixGuide:['',Validators.required],
    });
    this.guideService.findOne(+idGuide).subscribe(data=>{this.editForm.setValue(data)});
  }

  updateGuide(){
    var varJson=JSON.stringify(this.editForm.value);
    this.guideService.update(varJson).subscribe(()=>this.router.navigate(["/base/guides"]));
  }

}


