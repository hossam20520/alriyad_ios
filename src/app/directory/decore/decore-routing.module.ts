import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecorePage } from './decore.page';

const routes: Routes = [
  {
    path: '',
    component: DecorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecorePageRoutingModule {}
