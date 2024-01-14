import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatePageRoutingModule } from './gate-routing.module';

import { GatePage } from './gate.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [GatePage]
})
export class GatePageModule {}
