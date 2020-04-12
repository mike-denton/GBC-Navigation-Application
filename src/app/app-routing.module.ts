import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'e-building-floor2',
    loadChildren: () => import('./e-building-floor2/e-building-floor2.module').then( m => m.EBuildingFloor2PageModule)
  },
  {
    path: 'c-building-floor2',
    loadChildren: () => import('./c-building-floor2/c-building-floor2.module').then( m => m.CBuildingFloor2PageModule)
  },
  {
    path: 'd-building-floor2',
    loadChildren: () => import('./d-building-floor2/d-building-floor2.module').then( m => m.DBuildingFloor2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
