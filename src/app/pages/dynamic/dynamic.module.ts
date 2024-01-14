import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicPageRoutingModule } from './dynamic-routing.module';

import { DynamicPage } from './dynamic.page';

import { TranslateModule } from '@ngx-translate/core';

import { SafePipe } from './../../pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [DynamicPage, SafePipe]
})
export class DynamicPageModule {}
