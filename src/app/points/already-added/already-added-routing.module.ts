import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlreadyAddedPage } from './already-added.page';

const routes: Routes = [
  {
    path: '',
    component: AlreadyAddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlreadyAddedPageRoutingModule {}
