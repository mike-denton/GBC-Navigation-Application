import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DBuildingFloor2PageRoutingModule } from './d-building-floor2-routing.module';

import { DBuildingFloor2Page } from './d-building-floor2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DBuildingFloor2PageRoutingModule
  ],
  declarations: [DBuildingFloor2Page]
})
export class DBuildingFloor2PageModule {}
