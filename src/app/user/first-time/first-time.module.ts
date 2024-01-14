import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstTimePageRoutingModule } from './first-time-routing.module';

import { FirstTimePage } from './first-time.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstTimePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [FirstTimePage]
})
export class FirstTimePageModule {}
