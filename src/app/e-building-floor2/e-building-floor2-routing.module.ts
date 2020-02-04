import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EBuildingFloor2Page } from './e-building-floor2.page';

const routes: Routes = [
  {
    path: '',
    component: EBuildingFloor2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EBuildingFloor2PageRoutingModule {}
