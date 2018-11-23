import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController,ActionSheetController,Platform, Content} from 'ionic-angular';
import {BankPayPage} from '../bank-pay/bank-pay';
import {BorrowRecordPage} from '../borrow-record/borrow-record';
import {PipPipe } from '../../pipes/pip/pip';

let pageNum = 2;

@IonicPage()
@Component({
  selector: 'page-auto-mon',
  templateUrl: 'auto-mon.html',
})
export class AutoMonPage {
public should_pay='100';
public interest_money='20';
public serve_money='200';
public total='10000';

public repay='2000';
public dateend='2018-11-20';

  time:any;
  @ViewChild(Content) content:Content
  pageNum = pageNum;
  public isShow=true;
  favorites = 'huan';
  public duration:any=10;
  //时间选择

  Time = '2018-11-04T11:06Z';



  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public alertCtrl:AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl:LoadingController,
    public actionsheetCtrl:ActionSheetController,
    public platform:Platform
    ) {

    // this.time = new Date(new Date().getTime()+8*60*60*1000).toISOString();
   
  }
  scrollTo() {
    　　window.addEventListener('native.keyboardshow',(e:any) =>{
    　　　　this.content.scrollTo(0,e.keyboardHeight);
    　});
  }
  calculateTime(offset: any) {

    let d = new Date();

    let nd = new Date(d.getTime() + (3600000 * offset));

    return nd.toISOString();
  }

  stdTimezoneOffset(today: any) {
    let jan = new Date(today.getFullYear(), 0, 1);
    let jul = new Date(today.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  }

  dst(today: any) {
    return today.getTimezoneOffset() < this.stdTimezoneOffset(today);
  }


  pop() {
    if (pageNum > 2) {
      pageNum--;
    }
    this.navCtrl.pop();
  }

ngOnInit(): void {
 this.time = new Date(new Date().getTime()+8*60*60*1000).toISOString();
  
}
showone(){
  this.isShow=true;
}
toBank(){
  this.navCtrl.push(BankPayPage);
}
showtwo(){
  this.isShow=false;
}


toborrowtime(){
this.navCtrl.push(BorrowRecordPage)
}
}
