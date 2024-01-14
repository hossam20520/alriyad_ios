import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { SinglePageRoutingModule } from './single-routing.module';

import { SinglePage } from './single.page';


import { SafePipe } from './../../pipes/safe.pipe';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SinglePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SinglePage, SafePipe]
})
export class SinglePageModule {}
