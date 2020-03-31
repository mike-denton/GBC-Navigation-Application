import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CBuildingFloor2Page } from './c-building-floor2.page';

const routes: Routes = [
  {
    path: '',
    component: CBuildingFloor2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CBuildingFloor2PageRoutingModule {}
