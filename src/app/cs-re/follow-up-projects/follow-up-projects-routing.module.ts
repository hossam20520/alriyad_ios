import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowUpProjectsPage } from './follow-up-projects.page';

const routes: Routes = [
  {
    path: '',
    component: FollowUpProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowUpProjectsPageRoutingModule {}
