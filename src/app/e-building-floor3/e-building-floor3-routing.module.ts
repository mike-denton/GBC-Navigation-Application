import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EBuildingFloor3Page } from './e-building-floor3.page';

const routes: Routes = [
  {
    path: '',
    component: EBuildingFloor3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EBuildingFloor3PageRoutingModule {}
