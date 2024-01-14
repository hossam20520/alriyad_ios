import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForwardInstallmentsPageRoutingModule } from './forward-installments-routing.module';

import { ForwardInstallmentsPage } from './forward-installments.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForwardInstallmentsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ForwardInstallmentsPage]
})
export class ForwardInstallmentsPageModule {}
