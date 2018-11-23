import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperatorCertPage } from './operator-cert';

@NgModule({
  declarations: [
    OperatorCertPage,
  ],
  imports: [
    IonicPageModule.forChild(OperatorCertPage),
  ],
})
export class OperatorCertPageModule {}
