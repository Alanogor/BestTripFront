import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Interpolation: component -> html
  titre = 'Hello';
  personne="Jean Pierre";
  //Property binding
  alignement="center";
  //event binding
  modifierPersonne(){
    this.personne='frederick chopin';
  }
  resetPersonne(){
    this.personne="jean pierre";
  }
  //two way dataBinding [(ngModel)]
  telephone=12;
  //les filtres
  lastDate=new Date();
  curr=50;
  //travail perso
  premierNombre=0;
  secondNombre=0;
  resultat=0;
  multiplication(){
    this.resultat=this.premierNombre*this.secondNombre;
  }

  addition(){
    this.resultat=this.premierNombre+this.secondNombre;
  }

  soustraction(){
    this.resultat=this.premierNombre-this.secondNombre;
  }

  division(){
    this.resultat=this.premierNombre/this.secondNombre;
  }

  //auto event
  expression="";
  calcul=parseFloat(this.expression);
  calculChange(e:string){
    this.calcul=eval(e);
  }
  //variable+directive
  salutation="a tous";
}
