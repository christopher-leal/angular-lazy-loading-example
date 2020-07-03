import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotsComponent } from './lots/lots.component';

const routes: Routes = [ { path: '', component: LotsComponent } ];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class LotsRoutingModule {}
