import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPointsPage } from './view-points.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPointsPageRoutingModule {}
