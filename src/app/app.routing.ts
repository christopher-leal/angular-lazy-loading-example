import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	// {
	// 	path: '',
	// 	redirectTo: '/home',
	// 	pathMatch: 'full'
	// },
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: '',
		component: AdminComponent,
		// children: AdminLayoutRoutes,
		children: [
			{
				path: '',
				loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule)
				// loadChildren: './components/admin-layout.module#AdminLayoutModule'
			}
		]
	}
	// {
	// 	path: 'clients',
	// 	loadChildren: () => import('./components/clients/clients.module').then((m) => m.ClientsModule)
	// },
	// { path: 'lots', loadChildren: () => import('./components/lots/lots.module').then((m) => m.LotsModule) }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [ RouterModule ]
})
export class FeatureRoutingModule {}
