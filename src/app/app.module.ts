import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

import { RoleComponent } from './role/role.component';
import { UtilisateurService } from './service/utilisateur.service';
import {HttpClientModule} from '@angular/common/http';
import { RoleService } from './service/role.service';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    RoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // a ne pas oublié
  ],
  providers:[UtilisateurService,RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
