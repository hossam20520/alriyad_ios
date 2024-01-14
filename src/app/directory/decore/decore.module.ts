import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecorePageRoutingModule } from './decore-routing.module';

import { DecorePage } from './decore.page';

import { SafePipe } from './../../pipes/safe.pipe';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DecorePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [DecorePage, SafePipe]
})
export class DecorePageModule {}
