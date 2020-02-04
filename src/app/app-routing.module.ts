import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'e-building-floor3',
    loadChildren: () => import('./e-building-floor3/e-building-floor3.module').then( m => m.EBuildingFloor3PageModule)
  },
  {
    path: 'e-building-floor2',
    loadChildren: () => import('./e-building-floor2/e-building-floor2.module').then( m => m.EBuildingFloor2PageModule)
  },
  {
    path: 'e-building-floor2',
    loadChildren: () => import('./e-building-floor2/e-building-floor2.module').then( m => m.EBuildingFloor2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
