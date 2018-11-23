import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowRecordPage } from './borrow-record';

@NgModule({
  declarations: [
    BorrowRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowRecordPage),
  ],
})
export class BorrowRecordPageModule {}
