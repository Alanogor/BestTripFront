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
          title:'Les rôles'
        }
      },
      {
        path:'editUser/:id',
        component:EdituserComponent,
      }
          
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
