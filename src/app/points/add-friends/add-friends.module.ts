import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFriendsPageRoutingModule } from './add-friends-routing.module';

import { AddFriendsPage } from './add-friends.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFriendsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AddFriendsPage]
})
export class AddFriendsPageModule {}
