import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToBorrowPage } from './to-borrow';

@NgModule({
  declarations: [
    ToBorrowPage,
  ],
  imports: [
    IonicPageModule.forChild(ToBorrowPage),
  ],
})
export class ToBorrowPageModule {}
