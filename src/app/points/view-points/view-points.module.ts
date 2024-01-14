import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPointsPageRoutingModule } from './view-points-routing.module';

import { ViewPointsPage } from './view-points.page';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViewPointsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ViewPointsPage]
})
export class ViewPointsPageModule {}
