// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';

// navbars
import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { EdituserComponent } from './edituser/edituser.component';
import { GuideComponent } from './guide/guide.component';
import { EditGuideComponent } from './edit-guide/edit-guide.component';
import { ViewGuideComponent } from './view-guide/view-guide.component';
import { AjouterGuideComponent } from './ajouter-guide/ajouter-guide.component';

import { RecommandationComponent } from './recommandation/recommandation.component';
import { AjouterRecommandationComponent } from './ajouter-recommandation/ajouter-recommandation.component';
import { ExperienceService } from '../../services/experience.service';
import { ExperienceViewComponent } from './experience-view/experience-view.component';
import { AjouterExperienceComponent } from './ajouter-experience/ajouter-experience.component';

import { RecommandationviewComponent } from './recommandationview/recommandationview.component';
import { EditrecommandationComponent } from './editrecommandation/editrecommandation.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ReactiveFormsModule,
  ],
  declarations: [
    CardsComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    NavbarsComponent,
    EdituserComponent,
    GuideComponent,
    EditGuideComponent,
    ViewGuideComponent,
    AjouterGuideComponent,
    RecommandationComponent,
    AjouterRecommandationComponent,
    ExperienceViewComponent,
    AjouterExperienceComponent,
    RecommandationviewComponent,
    EditrecommandationComponent,
    EditExperienceComponent,
  ],providers:[
    ExperienceService
  ]
})
export class BaseModule { }
