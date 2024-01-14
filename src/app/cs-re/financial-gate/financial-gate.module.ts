import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancialGatePageRoutingModule } from './financial-gate-routing.module';

import { FinancialGatePage } from './financial-gate.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancialGatePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [FinancialGatePage]
})
export class FinancialGatePageModule {}
