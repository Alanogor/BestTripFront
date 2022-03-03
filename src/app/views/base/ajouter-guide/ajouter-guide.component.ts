import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guide } from '../../../models/guide';
import { GuideService } from '../../../services/guide.service';

@Component({
  selector: 'app-ajouter-guide',
  templateUrl: './ajouter-guide.component.html',
  styleUrls: ['./ajouter-guide.component.scss']
})
export class AjouterGuideComponent implements OnInit {
  guide=new Guide();
  guides:any;
  constructor(private router:Router,private guideService:GuideService) { }

  ngOnInit(): void {
  }

 save(){
   this.guideService.save(this.guide).subscribe(() => {
     this.router.navigate(['/base/guides']);
   })
 }
}
