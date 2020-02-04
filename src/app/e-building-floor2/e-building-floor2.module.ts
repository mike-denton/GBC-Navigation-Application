import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EBuildingFloor2PageRoutingModule } from './e-building-floor2-routing.module';

import { EBuildingFloor2Page } from './e-building-floor2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EBuildingFloor2PageRoutingModule
  ],
  declarations: [EBuildingFloor2Page]
})
export class EBuildingFloor2PageModule {}
