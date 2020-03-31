import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CBuildingFloor2PageRoutingModule } from './c-building-floor2-routing.module';

import { CBuildingFloor2Page } from './c-building-floor2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CBuildingFloor2PageRoutingModule
  ],
  declarations: [CBuildingFloor2Page]
})
export class CBuildingFloor2PageModule {}
