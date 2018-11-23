import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicCertPage } from './basic-cert';

@NgModule({
  declarations: [
    BasicCertPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicCertPage),
  ],
})
export class BasicCertPageModule {}
