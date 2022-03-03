import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentaireGuide } from '../../../models/commentaire-guide';
import { Guide } from '../../../models/guide';
import { CommentaireGuideService } from '../../../services/commentaire-guide.service';
import { GuideService } from '../../../services/guide.service';

@Component({
  selector: 'app-view-guide',
  templateUrl: './view-guide.component.html',
  styleUrls: ['./view-guide.component.scss']
})
export class ViewGuideComponent implements OnInit {
  guide:Guide=new Guide();
  commentaireGuide = new CommentaireGuide();
  constructor(private router:Router,private formBuilder:FormBuilder,private commentaireGuideService: CommentaireGuideService, private guideService:GuideService) { }

  ngOnInit(): void {
    let idGuide=localStorage.getItem("idGuide");
    if (!idGuide){
      alert("Invalid Action!!");
      this.router.navigate(["/base/guides"]);
      return;
    }
    this.guideService.findOne(+idGuide).subscribe(data=>{this.guide=data});
    this.commentaireGuide.guide= this.guide;
  }

  public save(){
    console.log('entrer');
    
   this.commentaireGuideService.save(this.commentaireGuide).subscribe(()=>{
    console.log("experience ="+this.guide);
    console.log(this.commentaireGuide);
    this.commentaireGuide = new CommentaireGuide();
    this.commentaireGuide.guide = this.guide;
    localStorage.removeItem("idGuide");
    localStorage.setItem("idGuide",this.guide.idGuide.toString());
    this.router.navigate(['/base/viewGuide',this.guide.idGuide])
    
    
   });
    
  }
}
