import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancialGatePage } from './financial-gate.page';

const routes: Routes = [
  {
    path: '',
    component: FinancialGatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialGatePageRoutingModule {}
