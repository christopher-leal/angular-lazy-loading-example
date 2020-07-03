import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotsRoutingModule } from './lots-routing.module';
import { LotsComponent } from './lots/lots.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [ LotsComponent ],
	imports: [ CommonModule, LotsRoutingModule, SharedModule ]
})
export class LotsModule {}
