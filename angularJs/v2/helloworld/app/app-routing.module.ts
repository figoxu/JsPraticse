import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  		{
  			path: '',
  			// by default, show dashboard
  			redirectTo: '/dashboard',
  			pathMatch: 'full'
  		}, 
		{
			path: 'heroes',
			component: HeroesComponent
		},
		{
			path: 'dashboard',
			component: DashboardComponent
		},
		{
			path: 'detail/:id',
			component: HeroDetailComponent
		}
	];

@NgModule({
  imports: [ 
  	RouterModule.forRoot(routes) 
  ],  
  exports: [ RouterModule]
})

export class AppRoutingModule {}