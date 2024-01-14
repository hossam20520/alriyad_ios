import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstallmentsPageRoutingModule } from './installments-routing.module';

import { InstallmentsPage } from './installments.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstallmentsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [InstallmentsPage]
})
export class InstallmentsPageModule {}
