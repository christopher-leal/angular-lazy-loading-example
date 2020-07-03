import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [ { path: '', component: ClientsComponent }, { path: ':id', component: ClientComponent } ];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ClientsRoutingModule {}
