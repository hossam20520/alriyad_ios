import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForwardInstallmentsPage } from './forward-installments.page';

const routes: Routes = [
  {
    path: '',
    component: ForwardInstallmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForwardInstallmentsPageRoutingModule {}
