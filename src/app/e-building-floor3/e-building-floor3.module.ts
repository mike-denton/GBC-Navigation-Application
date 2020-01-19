import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EBuildingFloor3PageRoutingModule } from './e-building-floor3-routing.module';

import { EBuildingFloor3Page } from './e-building-floor3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EBuildingFloor3PageRoutingModule
  ],
  declarations: [EBuildingFloor3Page]
})
export class EBuildingFloor3PageModule {}
