import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PortfolioFormComponent } from './components/portfolio-form/portfolio-form.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'builder',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'builder',
    component: PortfolioFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
