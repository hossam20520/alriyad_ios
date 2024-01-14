import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountStatementPageRoutingModule } from './account-statement-routing.module';

import { AccountStatementPage } from './account-statement.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountStatementPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AccountStatementPage]
})
export class AccountStatementPageModule {}
