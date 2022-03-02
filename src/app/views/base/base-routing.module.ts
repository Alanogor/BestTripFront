import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { EdituserComponent } from './edituser/edituser.component';

import { RecommandationComponent } from './recommandation/recommandation.component';
import { AjouterRecommandationComponent } from './ajouter-recommandation/ajouter-recommandation.component';


import { ExperienceViewComponent } from './experience-view/experience-view.component';
import { AjouterExperienceComponent } from './ajouter-experience/ajouter-experience.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'users'
      },
      {
        path: 'users',
        component: FormsComponent,
        data: {
          title: 'Les utilisateurs'
        }
      },
      {
        path:"roles",
        component:CollapsesComponent,
        data:{
          title:'Les roles'
        }
      },
      {
        path: 'recommandation',
        component: RecommandationComponent,
        data: {
          title: 'recommandation'
        }
      }
      ,
      {
        path: 'ajouterrecommandation',
        component: AjouterRecommandationComponent,
        data: {
          title: 'recommandation'
        }
      },
      {
        path:"editUser/:id",
        component:EdituserComponent,
      },
      {
        path:"experiences",
        component:CardsComponent,
        data:{
            title:"Les experiences"
        }
      },
      {
        path:"experienceview/:id",
        component:ExperienceViewComponent,
      },
      {
        path:"ajouterexperience",
        component: AjouterExperienceComponent,
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
