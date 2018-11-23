import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankCertPage } from './bank-cert';

@NgModule({
  declarations: [
    BankCertPage,
  ],
  imports: [
    IonicPageModule.forChild(BankCertPage),
  ],
})
export class BankCertPageModule {}
