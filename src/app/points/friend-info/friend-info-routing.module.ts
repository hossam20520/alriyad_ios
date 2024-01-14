import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendInfoPage } from './friend-info.page';

const routes: Routes = [
  {
    path: '',
    component: FriendInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendInfoPageRoutingModule {}
