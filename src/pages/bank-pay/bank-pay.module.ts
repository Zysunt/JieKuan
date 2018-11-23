import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankPayPage } from './bank-pay';

@NgModule({
  declarations: [
    BankPayPage,
  ],
  imports: [
    IonicPageModule.forChild(BankPayPage),
  ],
})
export class BankPayPageModule {}
