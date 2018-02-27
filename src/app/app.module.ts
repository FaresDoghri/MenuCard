import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenucardComponent } from './menucard/menucard.component';

import { MenuService } from './Services/menu.service';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		MenucardComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpModule
	],
	providers: [
		MenuService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
