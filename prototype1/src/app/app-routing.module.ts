import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '../app/material/material.module';   // Custom material design module

const routes: Routes = [];

@NgModule({
  imports: [
            RouterModule.forRoot(routes),
            MaterialModule,
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
