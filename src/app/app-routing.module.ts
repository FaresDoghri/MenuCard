import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenucardComponent } from './menucard/menucard.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'menucard', component: MenucardComponent },
	{ path: 'home', component: HomeComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}
