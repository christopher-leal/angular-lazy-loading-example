import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [ ClientsComponent, ClientComponent ],
	imports: [ CommonModule, ClientsRoutingModule, SharedModule ]
})
export class ClientsModule {}
