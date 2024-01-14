import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowUpProjectsPageRoutingModule } from './follow-up-projects-routing.module';

import { FollowUpProjectsPage } from './follow-up-projects.page';

import { SafePipe } from './../../pipes/safe.pipe';

import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowUpProjectsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [FollowUpProjectsPage, SafePipe]
})
export class FollowUpProjectsPageModule {}
