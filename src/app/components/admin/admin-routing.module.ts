import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	{ path: 'clients', loadChildren: () => import('./../clients/clients.module').then((m) => m.ClientsModule) },
	{ path: 'lots', loadChildren: () => import('./..//lots/lots.module').then((m) => m.LotsModule) }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AdminRoutingModule {}
