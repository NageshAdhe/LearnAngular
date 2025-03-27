import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnFormsComponent } from './learn-forms/learn-forms.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { LearnDirectivesComponent } from './learn-directives/learn-directives.component';
import { LearnPipesComponent } from './learn-pipes/learn-pipes.component';
import { LearnServicesComponent } from './learn-services/learn-services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'forms',
    component: LearnFormsComponent,
  },
  {
    path: 'directives',
    component: LearnDirectivesComponent,
  },
  {
    path: 'pipes',
    component: LearnPipesComponent,
  },
  {
    path: 'services',
    component: LearnServicesComponent,
  },
  {
    path: 'rxjs',
    component: LearnRxjsComponent,
  },
];
