import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatPageRoutingModule } from './cat-routing.module';

import { CatPage } from './cat.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [CatPage]
})
export class CatPageModule {}
