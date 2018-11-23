import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindDetailPage } from './find-detail';

@NgModule({
  declarations: [
    FindDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FindDetailPage),
  ],
})
export class FindDetailPageModule {}
