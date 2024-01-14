import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendInfoPageRoutingModule } from './friend-info-routing.module';

import { FriendInfoPage } from './friend-info.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FriendInfoPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [FriendInfoPage]
})
export class FriendInfoPageModule {}
