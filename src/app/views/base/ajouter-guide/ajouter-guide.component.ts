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
  selectedFiles?:FileList; //selection de plrs fichiers
  currentFileUpload:File; //selctionner 1 fichier a partir dune liste de fichier au dessus
  guide=new Guide();
  guides:any;
  constructor(private router:Router,private guideService:GuideService) { }

  ngOnInit(): void {
  }

  selectFile(event:any){
    this.selectedFiles = event.target.files; //donner valeur des fichiers selctinee a la variable files
  }
  
  findAll(){
    this.guideService.findAll().subscribe(data => {this.guide = data;}); 
  }
  save(){
    this.currentFileUpload = this.selectedFiles?.item(0) as File; //valeur de l'image selectionee
    this.guideService.save(this.currentFileUpload, this.guide).subscribe(
      () => {this.router.navigate(['/base/guides']);} //vider formulaire et nput de type files et refresh
    )
  }
}
