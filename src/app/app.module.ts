import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminModule } from './components/admin/admin.module';
import { FeatureRoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';

@NgModule({
	declarations: [ AppComponent, AdminComponent, HomeComponent ],
	imports: [ BrowserModule, FeatureRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
