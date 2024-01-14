import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlreadyAddedPageRoutingModule } from './already-added-routing.module';

import { AlreadyAddedPage } from './already-added.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlreadyAddedPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AlreadyAddedPage]
})
export class AlreadyAddedPageModule {}
