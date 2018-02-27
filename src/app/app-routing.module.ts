import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenucardComponent } from './menucard/menucard.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/menucard', pathMatch: 'full' },
	{ path: 'menucard', component: MenucardComponent },
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
