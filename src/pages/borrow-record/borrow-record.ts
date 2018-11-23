import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BorrowRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-borrow-record',
  templateUrl: 'borrow-record.html',
})
export class BorrowRecordPage {
apptype='isAll';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  apps: any = {
    'isAll': [
      {
        type: '普通借款All',
        startdate: '2018-10-10',
        code:'YSLA-123456789',
        money:'500元',
        deadline:'7天',
        dakuan:'--',
        repay:'--',
        status:'待审核'
      }
    ],
    'isWait': [
      {
        type: '普通借款wait',
        startdate: '2018-10-10',
        code:'YSLA-123456789',
        money:'500元',
        deadline:'7天',
        // dakuan:'--',
        // repay:'--',
        status:'待审核'
      }
    ],
    'isPass': [
      {
        type: '普通借款pass',
        startdate: '2018-10-10',
        code:'YSLA-123456789',
        money:'500元',
        deadline:'7天',
        dakuan:'2018-10-10',
        repay:'2018-10-17',
        status:'待还款'
      }
    ],
    'isCom': [
      {
        type: '普通借款com',
        startdate: '2018-10-10',
        code:'YSLA-123456789',
        money:'500元',
        deadline:'7天',
        dakuan:'2018-10-10',
        repay:'2018-10-17',
        status:'已完成'
      }
    ],
    'isCancle': [
      {
        type: '普通借款cancle',
        startdate: '2018-10-10',
        code:'YSLA-123456789',
        money:'500元',
        deadline:'7天',
        dakuan:'2018-10-10',
        repay:'2018-10-17',
        status:'已取消'
      }
    ],
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowRecordPage');
  }

  getItems(type: any) {
    return this.apps[type];
  }
}
