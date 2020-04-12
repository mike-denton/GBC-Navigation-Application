import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DBuildingFloor2Page } from './d-building-floor2.page';

const routes: Routes = [
  {
    path: '',
    component: DBuildingFloor2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DBuildingFloor2PageRoutingModule {}
